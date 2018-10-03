#!/usr/bin/env node
const init = require('../lib/init');

init({
  // @todo enable options passed in from cli
  force: true, // clean directory first
}).then(() => console.log('all done'));
