FROM basaltinc/docker-node-php-base:latest
WORKDIR app
COPY . .
EXPOSE 3042
RUN yarn install
RUN yarn build
RUN yarn test

CMD cd crux-site && npm run serve
