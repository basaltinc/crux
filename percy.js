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

async function go() {
// Start a Puppeteer instance.
  const browser = await puppeteer.launch({
    headless: true,
    args: [ '--single-process' ],
  });

  const allPatterns = patterns.getPatterns();

  for (const pattern of allPatterns) {

    const [ template ] = pattern.templates;
    const [ demoUrl ] = template.demoUrls;
    const id = `${pattern.id}-${template.id}-0`;
    const fullUrl = resolve(baseUrl, demoUrl);
    console.log(id);
    const page = await browser.newPage();

    // Load app.
    await page.goto(fullUrl);
    await percySnapshot(page, id);
    console.log(`done: ${id}`);
    // pattern.templates.forEach(template => {
    //   /** @type {BedrockPatternTemplate} */
    //   const t = template;
    //   t.demoUrls.forEach(demoUrl => {
    //     const fullUrl = resolve(baseUrl, demoUrl);
    //     // console.log(`${pattern.id}-${t.id}`);
    //     // console.log(fullUrl);
    //     // console.log('-----');
    //   })
    // })
  }

  console.log('all done');
  browser.close();
  process.exit(0);
}

go();

