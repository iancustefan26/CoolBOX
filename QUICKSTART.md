# CoolBox – On-Premise Deployment Guide

One Docker container bundles a **React presentation** + **Flask survey form & dashboard**.

---

## 1. Prerequisites

On the faculty server, make sure you have:

```bash
docker --version   # Docker 20+
git --version      # any recent version
```

If Docker is missing: `sudo apt install docker.io && sudo systemctl enable --now docker`  
Add your user to the docker group so you don't need sudo: `sudo usermod -aG docker $USER` (log out/in after).

---

## 2. Get the Code

```bash
git clone https://github.com/iancustefan26/CoolBOX.git
cd CoolBOX
```

---

## 3. Deploy

```bash
chmod +x deploy.sh
./deploy.sh
```

This builds the image (~2 min first time), creates a persistent volume for the database, and starts the container on **port 8080**.

Verify it works:

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/coolbox/
# Should print: 200
```

---

## 4. Expose to the Web (Nginx Reverse Proxy)

The app listens on `localhost:8080`. To make it reachable from the internet at `https://your-server.faculty.ro/coolbox/`, put Nginx in front of it.

### Install Nginx (if not already present)

```bash
sudo apt install nginx
```

### Create a site config

```bash
sudo nano /etc/nginx/sites-available/coolbox
```

Paste this (replace `your-server.faculty.ro` with the actual hostname):

```nginx
server {
    listen 80;
    server_name your-server.faculty.ro;

    location /coolbox/ {
        proxy_pass http://127.0.0.1:8080/coolbox/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable and reload:

```bash
sudo ln -s /etc/nginx/sites-available/coolbox /etc/nginx/sites-enabled/
sudo nginx -t            # check syntax
sudo systemctl reload nginx
```

Now `http://your-server.faculty.ro/coolbox/` is live.

### Add HTTPS (optional but recommended)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-server.faculty.ro
```

Certbot auto-configures SSL and sets up auto-renewal.

---

## 5. Auto-Restart on Reboot

The container should restart automatically if the server reboots:

```bash
docker update --restart unless-stopped coolbox-form
```

---

## 6. URLs

| URL | What it does |
|---|---|
| `/coolbox/` | Animated business presentation |
| `/coolbox/form` | Survey form |
| `/coolbox/form/dashboard` | Analytics dashboard (charts + export) |
| `/coolbox/form/api/stats` | JSON stats (GET) |
| `/coolbox/form/api/export` | Download responses as Excel (GET) |

---

## 7. Common Operations

```bash
docker logs -f coolbox-form       # live logs
docker restart coolbox-form       # restart
docker stop coolbox-form          # stop
docker ps | grep coolbox          # status
```

### Update to latest code

```bash
cd CoolBOX
git pull
docker stop coolbox-form && docker rm coolbox-form
./deploy.sh
```

The database lives in a Docker volume (`coolbox-data`) and survives container rebuilds.

### Backup the database

```bash
docker run --rm -v coolbox-data:/data -v $(pwd):/backup \
  ubuntu tar czf /backup/coolbox_backup_$(date +%Y%m%d).tar.gz -C /data .
```

---

## Project Structure

```
CoolBOX/
├── frontend/       # React/Vite presentation source
├── backend/        # Flask app, templates, assets, requirements.txt
├── Dockerfile      # Multi-stage build (Node → Python)
├── deploy.sh       # One-command deploy script
└── .dockerignore
```
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
