FROM basaltinc/knapsack-docker:v1.0.1
WORKDIR /app
COPY . .
EXPOSE 3999
# https://github.com/nodejs/help/issues/1941
RUN curl -L https://www.npmjs.com/install.sh | sh
RUN npm install && NODE_ENV=production npm run build

CMD NODE_ENV=production npm run serve
