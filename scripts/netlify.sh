#!/usr/bin/env bash
if [[ $IN_NETLIFY == 'yes' ]]; then
  echo 'In Netlify, setting up php and composer.'
  source ~/.phpbrew/bashrc
  phpbrew switch `phpbrew list|tail -n1`
  php -v
  composer --version
fi
