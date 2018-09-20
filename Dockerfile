FROM basaltinc/docker-node-php-base:latest
WORKDIR app
COPY . .
EXPOSE 5000
RUN yarn install
RUN yarn build
RUN yarn test

CMD cd crux-site && npm run serve
