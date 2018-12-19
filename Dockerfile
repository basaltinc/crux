FROM basaltinc/bedrock:latest
WORKDIR /app
COPY . .
EXPOSE 3999
RUN npm install
RUN npm run build

CMD npm run serve
