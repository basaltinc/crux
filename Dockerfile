FROM basaltinc/knapsack-docker:v1.0.1
WORKDIR /app
COPY . .
EXPOSE 3999
RUN npm i -g npm@6.8.0
RUN npm install && NODE_ENV=production npm run build

CMD NODE_ENV=production npm run serve
