#! /usr/bin/env node
const { resolve } = require('url');
const puppeteer = require('puppeteer');
const { percySnapshot } = require('@percy/puppeteer');
const fetch = require('node-fetch');

const baseUrl = process.env.BASE_URL;
if (!baseUrl) {
  console.log('need BASE_URL env var');
  process.exit(1);
}

async function go() {
  const requestUrl = resolve(baseUrl, '/graphql');
  console.log({ requestUrl });
  const allPatterns = await fetch(requestUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
        patterns {
          id
          templates {
            id
            demoUrls
          }
        }
      }`,
    }),
  })
    .then(res => {
      const { status, statusText, ok } = res;

      console.log({
        status,
        statusText,
        ok,
      });

      if (!ok) {
        console.log('pattern template API request failed', { status, statusText });
        process.exit(1);
      }

      return res.json();
    })
    .then(({ data }) => data.patterns)
    .catch(err => {
      console.log('pattern template API error thrown', err);
      process.exit(1);
    });

  // Start a Puppeteer instance.
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--single-process',
      '--no-sandbox',
    ],
  });
  const page = await browser.newPage();

  for (const pattern of allPatterns) {
    for (const template of pattern.templates) {
      /** @type {BedrockPatternTemplate} */
      const t = template;
      let i = 0;
      for (const demoUrl of t.demoUrls) {
        i++;
        const id = `${pattern.id}-${template.id}-${i}`;
        console.log(id);
        const fullUrl = resolve(baseUrl, demoUrl);
        await page.goto(fullUrl);
        await percySnapshot(page, id);
        console.log(`done: ${id}`);
      }
    }
  }

  console.log('all done');
  browser.close();
  process.exit(0);
}

go();

