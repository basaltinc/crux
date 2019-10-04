FROM ubuntu:16.04

RUN export LC_ALL=C.UTF-8
RUN DEBIAN_FRONTEND=noninteractive
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && apt-get install --no-install-recommends -y \
    sudo \
    autoconf \
    autogen \
    language-pack-en-base \
    wget \
    curl \
#    rsync \
    ssh \
#    openssh-client \
    git \
    build-essential \
    apt-utils \
    software-properties-common \
#    python-software-properties \
    nasm && \
#    libjpeg-dev \
#    libpng-dev \
#    libpng16-16 && \
    rm -rf /var/lib/apt/lists/*

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

# PHP
RUN LC_ALL=en_US.UTF-8 add-apt-repository ppa:ondrej/php && apt-get update && apt-get install --no-install-recommends -y \
    php7.2 \
    php7.2-curl \
#    php7.2-gd \
    php7.2-dev \
    php7.2-xml \
    php7.2-bcmath \
#    php7.2-mysql \
    php7.2-mbstring \
    php7.2-zip \
    php7.2-bz2 \
    php7.2-sqlite \
#    php7.2-soap \
    php7.2-json && \
#    php7.2-intl \
#    php7.2-imap \
#    php7.2-imagick \
#    php-xdebug \
#    php-memcached && \
    rm -rf /var/lib/apt/lists/* && \
    command -v php

# Composer
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer && \
    chmod +x /usr/local/bin/composer && \
    composer self-update --preview
RUN command -v composer

# Node.js
RUN curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install --no-install-recommends nodejs -y
RUN npm install npm@latest -g
RUN command -v node
RUN command -v npm

# Yarn
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN sudo apt-get update && sudo apt-get install yarn

# Ansible
#RUN apt-add-repository ppa:ansible/ansible
#RUN apt-get update && apt-get install --no-install-recommends ansible -y && rm -rf /var/lib/apt/lists/* && command -v ansible

# Other
RUN mkdir ~/.ssh && touch ~/.ssh_config

# Display versions installed
RUN php -v && composer --version && node -v && npm -v && yarn -v

# ---
WORKDIR /app
COPY . .
EXPOSE 3999
RUN npm install && NODE_ENV=production npm run build

CMD NODE_ENV=production npm run serve
