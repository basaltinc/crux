FROM ubuntu:latest

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && \
  apt-get -y install \
  apt-utils \
  php \
  php-mbstring \
  php-zip \
  curl \
  gnupg \
  git \
  composer

# node
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs build-essential

# yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN ["/bin/bash", "-c", "source ~/.bashrc"]

COPY . .
EXPOSE 3042

# Since `RUN` uses `/bin/sh` and that's a non-interactive shell session, use of `cd` does not work; so we must use working directory flags for the below commands instead of their `yarn run` counterparts.
#RUN ["/bin/bash", "-c", "$HOME/.yarn/bin/yarn install"]
#RUN ["/bin/bash", "-c", "cd site && composer install --no-interaction"]

# `postinstall` runs this already
#RUN ["/bin/bash", "-c", "npm run build"]

# tell the port number the container should expose
#ENV apiUrlBase "/api"
CMD ["/bin/bash", "-c", "cd site && npm run serve"]
