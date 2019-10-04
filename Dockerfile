FROM basaltinc/docker-node-php-base:latest
WORKDIR /app
COPY . .
EXPOSE 3999
RUN npm install && NODE_ENV=production npm run build

CMD NODE_ENV=production npm run serve
