# ./Dockerfile
# ./.dockerignore
#
# Multi-stage Docker image build instructions.

# Stage 1. Def base, switch user, and install deps.
FROM node:22-alpine AS base
WORKDIR /app

USER root
RUN chown --recursive node:node /app

USER node
COPY --chown=node:node package*.json ./
RUN npm install --global pnpm@latest
RUN pnpm ci

# Stage 2. Install dependencies and build the app.
# (Must use ci instead of ci --omit=dev because
# dev modules are needed for the build process.)
FROM base AS build
USER node
COPY --chown=node:node . .
# Removed review because Firebase env are not loaded 
# in the build process.
RUN pnpm run build

# Stage 3.A Optimize for production, 
# use the NextJS production server.
FROM node:22-alpine AS production
WORKDIR /app

USER root
RUN chown --recursive node:node /app

USER node
COPY --from=build --chown=node:node /app/next.config.js ./
COPY --from=build --chown=node:node /app/package*.json ./
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/.next ./.next
RUN npm install --global pnpm@latest
RUN pnpm ci --omit=dev

# Accept incoming firebase env vars only at runtime,
# latest Firebase app config no longer needs measurement id.
ENV FIREBASE_API_KEY=
ENV FIREBASE_AUTH_DOMAIN=
ENV FIREBASE_PROJECT_ID=
ENV FIREBASE_STORAGE_BUCKET=
ENV FIREBASE_MESSAGING_SENDER_ID=
ENV FIREBASE_APP_ID=

# Make NextJS's default 3000 port editable via build arg.
ENV EXPOSE_PORT=3000
EXPOSE $EXPOSE_PORT

# 3.C Start the NextJS production server.
CMD ["pnpm", "start"]
