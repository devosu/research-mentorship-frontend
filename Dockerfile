# Path: <rootDir>/Dockerfile
# Ignore path: <rootDir>/.dockerignore
#
# Multi-stage Docker image build instructions.

# Stage 1. Def base and swtich off root user.
FROM node:18-apline AS base
WORKDIR /app

USER root
RUN chown --recursive node:node /app

USER node
COPY --chown=node:node package*.json ./

# Stage 2. Install dependencies and build the app.
# (Must use ci instead of ci --omit=dev because
# dev modules are needed for the build process.)
FROM base AS build
RUN npm ci
COPY --chown=node:node . .
RUN set -e; \
  npm run review; \
  npm run build

# Stage 3. Trim build for release.
FROM node:18-alpine AS release
WORKDIR /app
COPY --from=build --chown=node:node /app/package*.json ./
COPY --from=build --chown=node:node /app/build ./
RUN npm ci --omit=dev

# Stage 3.5. TODO
