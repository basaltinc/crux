FROM basaltinc/docker-node-php-base:latest
WORKDIR app
COPY . .
EXPOSE 3042
RUN yarn install && yarn setup && yarn build

CMD cd site && npm run serve
