# ============================================
# Dockerfile - Node.js Notes API
# ============================================

FROM node:18-alpine

# Create non-root user for security
RUN addgroup -g 1001 -S appgroup && \
    adduser -S appuser -u 1001

WORKDIR /app

# Copy package files (better caching)
COPY package*.json ./

# Install dependencies
# Using regular install since project is simple
RUN npm ci

# Copy all application source
COPY . .

# Fix permissions
RUN chown -R appuser:appgroup /app

USER appuser

# Application port
EXPOSE 3000

# Health check for CI/CD + docker-compose
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Start command
CMD ["npm", "start"]
