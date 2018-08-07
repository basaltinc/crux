FROM basaltinc/docker-node-php-base:latest

COPY . .
EXPOSE 3042

# Since `RUN` uses `/bin/sh` and that's a non-interactive shell session, use of `cd` does not work; so we must use working directory flags for the below commands instead of their `yarn run` counterparts.
#RUN ["/bin/bash", "-c", "$HOME/.yarn/bin/yarn install"]
#RUN ["/bin/bash", "-c", "cd site && composer install --no-interaction"]

# `postinstall` runs this already
#RUN ["/bin/bash", "-c", "npm run build"]

# tell the port number the container should expose
#ENV apiUrlBase "/api"
#CMD ["/bin/bash", "-c", "cd site && npm run serve"]
CMD cd site && npm run serve
