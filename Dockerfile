FROM basaltinc/docker-node-php-base:latest

COPY . .
EXPOSE 3042
# Builds afterwards
RUN yarn install

CMD cd site && npm run serve
