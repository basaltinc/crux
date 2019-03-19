#! /usr/bin/env node
const { bootstrapFromConfigFile } = require('@basalt/bedrock');
const { resolve } = require('url');
const puppeteer = require('puppeteer');
const { percySnapshot } = require('@percy/puppeteer');

const baseUrl = process.env.BASE_URL;
if (!baseUrl) {
  console.log('need BASE_URL env var');
  process.exit(1);
}

/** @type {BedrockBrain} */
const bedrock = bootstrapFromConfigFile('./bedrock.config.js');

const { patterns } = bedrock;
const allPatterns = patterns.getPatterns();

async function go() {
// Start a Puppeteer instance.
  const browser = await puppeteer.launch({
    headless: true,
    args: [ '--single-process' ],
  });
  const page = await browser.newPage();

  for (const pattern of allPatterns) {
    // const [ template ] = pattern.templates;
    // const [ demoUrl ] = template.demoUrls;
    // const fullUrl = resolve(baseUrl, demoUrl);

    for (const template of templates) {
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

