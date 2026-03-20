# CoolBox – Server Deployment Guide

This document is for the **server administrator** who will deploy the CoolBox application. The application consists of a **business presentation** (React) and a **survey form with analytics dashboard** (Flask), bundled into a single Docker container.

---

## Prerequisites

- **Docker** (version 20+ recommended)
- **Port 8080** available (or configure a different port)
- The `coolbox/` folder transferred to the server

---

## Quick Deploy

```bash
cd /path/to/coolbox
chmod +x deploy.sh
./deploy.sh
```

That's it. The script will:
1. Build the Docker image (multi-stage: Node.js builds the React presentation, Python runs the Flask backend)
2. Create a Docker volume (`coolbox-data`) for persistent database storage
3. Start the container

---

## What's in the Folder

| File / Folder | Purpose |
|---|---|
| `frontend/` | React/Vite source for the presentation slides |
| `backend/app.py` | Flask backend (form, dashboard, API, serves presentation) |
| `backend/requirements.txt` | Python dependencies (Flask, openpyxl) |
| `backend/templates/` | HTML templates (form & dashboard) |
| `backend/assets/` | Static files (logo) |
| `Dockerfile` | Multi-stage Docker build definition |
| `deploy.sh` | Automated deployment script |
| `.dockerignore` | Excludes unnecessary files from Docker build |

---

## Application URLs

After deployment at `http://<server>:8080`:

| URL | Description |
|---|---|
| `/coolbox/` | Business presentation (7-slide animated slideshow) |
| `/coolbox/form` | Survey form |
| `/coolbox/form/dashboard` | Analytics dashboard with charts |
| `/coolbox/form/api/stats` | JSON stats endpoint (GET) |
| `/coolbox/form/api/export` | Export responses as Excel (GET) |

The presentation's last slide has a button that redirects users to the survey form.

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `COOLBOX_PORT` | `8080` | Host port to map to the container |
| `COOLBOX_SUBPATH` | `coolbox/form` | URL subpath for the form application |

Example with custom port:
```bash
COOLBOX_PORT=9000 ./deploy.sh
```

---

## Reverse Proxy (Nginx)

If the server runs behind Nginx (e.g., at `https://projects.example.com/coolbox/`):

```nginx
location /coolbox/ {
    proxy_pass http://localhost:8080/coolbox/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Then reload Nginx:
```bash
sudo systemctl reload nginx
```

---

## Data Persistence

- **Database**: SQLite, stored inside Docker volume `coolbox-data` at `/app/data/responses.db`
- The volume persists across container stops/restarts
- **Backup**:
  ```bash
  docker run --rm -v coolbox-data:/data -v $(pwd):/backup \
    ubuntu tar czf /backup/coolbox_backup_$(date +%Y%m%d).tar.gz -C /data .
  ```
- **Restore**:
  ```bash
  docker run --rm -v coolbox-data:/data -v $(pwd):/backup \
    ubuntu tar xzf /backup/coolbox_backup_YYYYMMDD.tar.gz -C /data
  ```

---

## Common Operations

| Task | Command |
|---|---|
| View live logs | `docker logs -f coolbox-form` |
| Check status | `docker ps \| grep coolbox-form` |
| Restart container | `docker restart coolbox-form` |
| Stop container | `docker stop coolbox-form` |
| Start stopped container | `docker start coolbox-form` |

### Updating the Application

When you receive an updated `coolbox/` folder with code changes, you must **remove and recreate** the container (a simple restart reuses the old image):

```bash
docker stop coolbox-form
docker rm coolbox-form
./deploy.sh
```

The database is stored in the Docker volume, so **data is preserved** even when the container is removed.

---

## Manual Docker Commands

If you prefer not to use `deploy.sh`:

```bash
# Build the image
docker build -t coolbox-form:latest .

# Create the data volume (once)
docker volume create coolbox-data

# Run the container
docker run -d \
  --name coolbox-form \
  -p 8080:8080 \
  -v coolbox-data:/app/data \
  -e "APP_SUBPATH=/coolbox/form" \
  coolbox-form:latest
```

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Port already in use | `COOLBOX_PORT=9000 ./deploy.sh` |
| Container won't start | `docker logs coolbox-form` to see errors |
| Build fails at Node step | Ensure the `CoolBOX Business Presentation/` folder is present |
| Presentation not loading | Check that `/coolbox/` returns 200: `curl -I http://localhost:8080/coolbox/` |
| Database errors | Check volume: `docker exec coolbox-form ls -la /app/data/` |
| Need to reset data | `docker exec coolbox-form rm /app/data/responses.db && docker restart coolbox-form` |
✅ Mobile responsive design  
✅ SQLite database  
✅ Persistent data storage  
✅ Health checks included  
✅ Production-ready with Gunicorn  

---

## 🔐 Security Checklist

- [ ] Use HTTPS (configure in reverse proxy)
- [ ] Restrict port 8080 access to localhost only
- [ ] Implement authentication at reverse proxy level if needed
- [ ] Schedule regular database backups
- [ ] Monitor container logs
- [ ] Keep Docker and images updated

---

## 📞 Support Resources

1. **README.md** - Full documentation
2. **DEPLOYMENT.md** - Detailed deployment guide
3. **Docker Logs** - `docker logs coolbox-form`
4. **Application Routes**:
   - GET `/coolbox/form` - Survey form
   - GET `/coolbox/form/dashboard` - Analytics dashboard
   - POST `/coolbox/form/api/submit` - Submit responses
   - GET `/coolbox/form/api/stats` - Get analytics data
   - GET `/coolbox/form/api/export` - Export responses to Excel

---

## 📈 Performance

- **Base Image**: Python 3.11-slim (~312MB)
- **Final Image Size**: ~500MB
- **Memory Usage**: 100-150MB per instance
- **Gunicorn Workers**: 4 (auto-scalable)
- **Request Timeout**: 120 seconds

---

## 🔄 Update Process

```bash
# Build new image
docker build -t coolbox-form:v2 .

# Stop old container
docker stop coolbox-form

# Run new container
docker run -d --name coolbox-form \
  -p 8080:8080 \
  -v coolbox-data:/app/data \
  -e "APP_SUBPATH=/coolbox/form" \
  coolbox-form:v2
```

---

**Version**: 1.0  
**Last Updated**: March 2026  
**Requires**: Docker 20.10+ or Docker Desktop
