# Path: <rootDir>/Dockerfile
# Ignore path: <rootDir>/.dockerignore
#
# Multi-stage Docker image build instructions.

# Stage 1. Def base, switch user, and install deps.
FROM node:18-alpine AS base
WORKDIR /app

USER root
RUN chown --recursive node:node /app

USER node
COPY --chown=node:node package*.json ./
RUN npm ci

# Stage 2. Install dependencies and build the app.
# (Must use ci instead of ci --omit=dev because
# dev modules are needed for the build process.)
FROM base AS build
USER node
COPY --chown=node:node . .
RUN set -e; \
  npm run review; \
  npm run build

# Stage 3.A Optimize for production, 
# use the NextJS production server.
FROM node:18-alpine AS production
WORKDIR /app
USER root
RUN chown --recursive node:node /app

USER node
COPY --chown=node:node package*.json ./
RUN npm ci --omit=dev

COPY --from=build --chown=node:node /app/.next .next

# 3.B Resolve server routing via default config.
COPY default.conf /etc/nginx/conf.d/

# Make default http 80 port editable via build arg.
ENV EXPOSE_PORT=80
EXPOSE $EXPOSE_PORT

# 3.C Start the nginx server.
# ENTRYPOINT for the executable, CMD for the arguments.
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
