# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Static files init container
FROM alpine:3.20 AS production
RUN apk add --no-cache rsync
WORKDIR /app
COPY --from=builder /app/dist ./dist
ENTRYPOINT ["sh", "-c", "rsync -a --delete /app/dist/ /output/ && echo 'Static files deployed'"]
