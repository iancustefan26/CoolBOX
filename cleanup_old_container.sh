# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# If you cleanup the container all the data will be lost

if docker ps -a --format '{{.Names}}' | grep -q "^coolbox-form"; then
    echo -e "${YELLOW}Step 2: Cleaning up old container...${NC}"
    docker stop coolbox-form 2>/dev/null || true
    docker rm coolbox-form 2>/dev/null || true
    echo -e "${GREEN}✓ Old container removed${NC}"
    echo ""
else
    echo -e "${GREEN}✓ No existing container found${NC}"
    echo ""
fi