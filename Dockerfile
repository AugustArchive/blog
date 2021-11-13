FROM node:17-alpine

LABEL MAINTAINER="Noel <cutie@floofy.dev>"
RUN apk update && apk add --no-cache git ca-certificates make gcc g++ bash

WORKDIR /app
COPY . .
RUN yarn global add typescript eslint

# https://github.com/webpack/webpack/issues/14532
RUN NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS=--openssl-legacy-provider NODE_ENV=production yarn build
RUN yarn cache clean

CMD [ "yarn", "start" ]
