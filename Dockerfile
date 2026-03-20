# Stage 1: Build the React presentation
FROM node:20-slim AS presentation-build
WORKDIR /build
COPY ["CoolBOX Business Presentation/package.json", "CoolBOX Business Presentation/package-lock.json", "./"]
RUN npm ci
COPY ["CoolBOX Business Presentation/", "./"]
RUN npm run build

# Stage 2: Python app
# Use Python 3.11 slim image as base
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for better layer caching
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt gunicorn==21.2.0

# Copy application files
COPY app.py .
COPY templates/ templates/
COPY assets/ assets/

# Copy built presentation from stage 1
COPY --from=presentation-build /build/dist/ presentation/

# Create data directory for SQLite database
RUN mkdir -p /app/data

# Set environment variables
ENV FLASK_APP=app.py
ENV PYTHONUNBUFFERED=1
ENV APP_SUBPATH=/coolbox/form

# Expose port 8080
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/ || exit 1

# Run with gunicorn in production
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "--workers", "4", "--timeout", "120", "--access-logfile", "-", "--error-logfile", "-", "app:app"]

