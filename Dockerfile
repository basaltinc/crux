FROM basaltinc/docker-node-php-base:latest
ARG NPM_TOKEN
WORKDIR /app
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc

COPY . .
EXPOSE 3999
RUN npm install
RUN npm run build

CMD npm run serve
