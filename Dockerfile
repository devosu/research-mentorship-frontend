# ./Dockerfile
# ./.dockerignore
#
# Multi-stage Docker image build instructions
# for Node.js backend app using pnpm as package manager.

# Stage 1. Def base, switch user, and install deps.
FROM node:22-alpine AS base
WORKDIR /app

# When using pnpm, make sure to install globally
# with root privilege before switching back to the node user.
USER root
RUN npm install --global pnpm@9.4.0
RUN chown --recursive node:node /app

# When using pnpm, make sure to include
# pnpm-lock.yaml and .npmrc instead of package-lock.json.
USER node
COPY --chown=node:node package.json ./
COPY --chown=node:node pnpm-lock.yaml ./
COPY --chown=node:node .npmrc ./
RUN pnpm install

# Stage 2. Install dependencies and build the app.
# (Must use pnpm install instead of pnpm install --prod because
# dev dependencies are needed for the build process.)
FROM base AS build
USER node
COPY --chown=node:node . .
RUN pnpm run build

# Stage 3.A Optimize for production, only install production dependencies,
# then load the env vars and start the [NextJS] server via /dist dir from build stage.
FROM node:22-alpine AS production
WORKDIR /app

USER root
RUN npm install --global pnpm@9.4.0
RUN chown --recursive node:node /app

USER node
COPY --chown=node:node package.json ./
COPY --chown=node:node pnpm-lock.yaml ./
COPY --chown=node:node .npmrc ./
RUN pnpm install --prod

# Copy over only the production files.
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/.next ./.next
COPY --from=build --chown=node:node /app/.env.example ./

# Accept incoming [Firebase] env vars only at runtime,
# latest [Firebase] config no longer needs measurement id.
ENV NEXT_PUBLIC_FIREBASE_API_KEY=
ENV NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
ENV NEXT_PUBLIC_FIREBASE_PROJECT_ID=
ENV NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
ENV NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
ENV NEXT_PUBLIC_FIREBASE_APP_ID=

# Make [NextJS]'s default [3000] port editable via build arg.
ENV NEXT_PUBLIC_PORT=3000
EXPOSE $NEXT_PUBLIC_PORT

# Add a healthcheck to the [NextJS] server.
# (Note: for node:22-alpine, curl is not installed by default,
# make sure to install it as root user.)
USER root
RUN apk add --no-cache curl
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl --fail http://localhost:$PORT || exit 1

# 3.C Start the [NextJS] production server as non-root node user.
USER node
CMD ["pnpm", "start"]
