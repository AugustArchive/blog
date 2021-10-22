FROM node:17-alpine AS builder

LABEL MAINTAINER="Noel <cutie@floofy.dev>"
RUN apk update && apk add --no-cache git ca-certificates make gcc g++ bash

WORKDIR /app
COPY . .
RUN yarn global add typescript eslint
RUN NUXT_TELEMETRY_DISABLED=1 yarn build
RUN yarn cache clean

FROM node:17-alpine

WORKDIR /app/floof/blog
COPY --from=builder /app/node_modules /app/floof/blog/node_modules
COPY --from=builder /app/.nuxt /app/floof/blog/.nuxt
COPY docker /app/floof/blog/docker
RUN chmod +x ./docker/start.sh

ENTRYPOINT [ "sh", "./docker/start.sh" ]
