#! /usr/bin/env node
const fs = require('fs');
const { join } = require('path');
console.log('starting actions--on-deploy.js');
const { GITHUB_SHA, GITHUB_EVENT_NAME, GITHUB_EVENT_PATH } = process.env;
console.log({ GITHUB_SHA, GITHUB_EVENT_NAME, GITHUB_EVENT_PATH });

const event = require(GITHUB_EVENT_PATH);
// console.log(JSON.stringify(event, null, '  '));
// console.log('done');

const { state, description, target_url: url, log_url } = event.deployment_status;
console.log({ description, log_url });
if (state !== 'success') {
  console.log(`Deploy is not "success", it is "${state}"; quitting...`);
  if (state === 'failure') process.exit(1);
  process.exit(78); // neutral, stops other acyions but didnt fail ourselves - https://developer.github.com/actions/creating-github-actions/accessing-the-runtime-environment/#exit-codes-and-statuses
}
const { environment, original_environment } = event.deployment;
console.log(`Deploy url (env: ${environment}):

${url}

`);

fs.writeFileSync(join(__dirname, '../.github/artifacts/now-url.txt'), url);
process.exit(0);