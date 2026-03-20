#!/bin/bash
# CoolBox Form Deployment Script
# This script builds and deploys the CoolBox form application in Docker
# Usage: ./deploy.sh [OPTIONS]

set -e

# Default values
IMAGE_NAME="coolbox-form"
TAG="${1:-latest}"
PORT="${COOLBOX_PORT:-8080}"
SUBPATH="${COOLBOX_SUBPATH:-coolbox/form}"
CONTAINER_NAME="coolbox-form-$(date +%s)"
DATA_VOLUME="coolbox-data"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}CoolBox Form Deployment Script${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Display configuration
echo -e "${YELLOW}Configuration:${NC}"
echo "  Image Name: $IMAGE_NAME:$TAG"
echo "  Container Port: $PORT"
echo "  Subpath: /$SUBPATH"
echo "  Data Volume: $DATA_VOLUME"
echo ""

# Build the Docker image
echo -e "${YELLOW}Step 1: Building Docker image...${NC}"
docker build -t "${IMAGE_NAME}:${TAG}" .
echo -e "${GREEN}✓ Image built successfully${NC}"
echo ""

# Create data volume if it doesn't exist
echo -e "${YELLOW}Step 2: Setting up data volume...${NC}"
if ! docker volume inspect "$DATA_VOLUME" > /dev/null 2>&1; then
    docker volume create "$DATA_VOLUME"
    echo -e "${GREEN}✓ Created volume: $DATA_VOLUME${NC}"
else
    echo -e "${GREEN}✓ Volume already exists: $DATA_VOLUME${NC}"
fi
echo ""

# Run the container
echo -e "${YELLOW}Step 3: Starting container...${NC}"

EXISTING=$(docker ps -a --filter "name=^coolbox-form$" --format "{{.Names}}")
if [ -n "$EXISTING" ]; then
    echo "  Existing container found. Stopping and restarting it..."
    docker stop coolbox-form 2>/dev/null || true
    docker start coolbox-form
else
    echo "  No existing container found. Creating a new one..."
    docker run -d \
        --name coolbox-form \
        -p "${PORT}:8080" \
        -v "${DATA_VOLUME}:/app/data" \
        -e "APP_SUBPATH=/${SUBPATH}" \
        "${IMAGE_NAME}:${TAG}"
fi
    
CONTAINER_ID=$(docker ps --filter "name=coolbox-form" --format "{{.ID}}")
echo -e "${GREEN}✓ Container started with ID: ${CONTAINER_ID:0:12}${NC}"
echo ""

# Wait for container to be ready
echo -e "${YELLOW}Step 4: Waiting for application to be ready...${NC}"
max_attempts=30
attempt=0
while [ $attempt -lt $max_attempts ]; do
    if docker exec coolbox-form curl -f http://localhost:8080/${SUBPATH}/ > /dev/null 2>&1; then
        echo -e "${GREEN}✓ Application is ready${NC}"
        break
    fi
    attempt=$((attempt + 1))
    echo "  Attempt $attempt/$max_attempts..."
    sleep 1
done

if [ $attempt -eq $max_attempts ]; then
    echo -e "${YELLOW}⚠ Application may still be starting...${NC}"
fi
echo ""

# Display access information
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}Deployment Complete! ✓${NC}"
echo -e "${GREEN}================================================${NC}"
echo ""
echo -e "${BLUE}Access your application at:${NC}"
echo -e "  ${YELLOW}http://localhost:${PORT}/${SUBPATH}/${NC}"
echo ""
echo -e "${BLUE}Useful commands:${NC}"
echo -e "  View logs: ${YELLOW}docker logs -f coolbox-form${NC}"
echo -e "  Stop container: ${YELLOW}docker stop coolbox-form${NC}"
echo -e "  Restart container: ${YELLOW}docker restart coolbox-form${NC}"
echo -e "  Remove container: ${YELLOW}docker rm coolbox-form${NC}"
echo ""
echo -e "${BLUE}Environment Variables:${NC}"
echo -e "  Set port: ${YELLOW}COOLBOX_PORT=9000 ./deploy.sh${NC}"
echo -e "  Set subpath: ${YELLOW}COOLBOX_SUBPATH=form ./deploy.sh${NC}"
echo ""
echo -e "${BLUE}Data Persistence:${NC}"
echo -e "  Database location: ${YELLOW}/app/data/responses.db${NC}"
echo -e "  Volume name: ${YELLOW}${DATA_VOLUME}${NC}"
echo ""
