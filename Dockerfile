FROM basaltinc/docker-node-php-base:latest
ARG NPM_TOKEN
WORKDIR /app
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc

COPY . .
EXPOSE 3042
RUN yarn install
RUN yarn build
RUN yarn test

CMD cd crux-site && npm run serve
