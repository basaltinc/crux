FROM basaltinc/docker-node-php-base:latest
WORKDIR app
COPY . .
EXPOSE 3042
RUN yarn install
RUN yarn setup
RUN yarn build
RUN yarn test

CMD cd site && npm run serve
