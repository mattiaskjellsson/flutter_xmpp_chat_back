FROM node:16-alpine as development
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn --prod --frozen-lockfile --link-duplicates

COPY --from=development /app/dist /app/dist

EXPOSE ${API_PORT}
CMD ["node", "/app/dist/main", "--release", "--prod"]
