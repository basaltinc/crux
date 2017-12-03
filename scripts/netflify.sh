#!/usr/bin/env bash
if [[ $IN_NETLIFY == 'yes' ]]; then
  source ~/.phpbrew/bashrc
  phpbrew switch `phpbrew list|tail -n1`
fi
