const fs = require('fs-extra');
const os = require('os');
const { join } = require('path');

async function writeMeta(dir, config) {
  const thePath = join(dir, 'meta.json');
  const theFile = {
    title: config.title,
  };
  await fs.writeFile(thePath, JSON.stringify(theFile, null, '  ') + os.EOL);
}

async function writeEntry(dir, config) {
  const thePath = join(dir, 'index.js');
  const theFile = `
const schema = require('./${config.id}.schema.json');

module.exports = {
  id: '${config.id}',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/${config.id}.twig',
      selector: '.${config.id}',
      schema,
    },
  ],
};
`.trim();
  await fs.writeFile(thePath, theFile);
}

async function writeSchema(dir, config) {
  const thePath = join(dir, `${config.id}.schema.json`);
  const theFile = {
    $schema: 'http://json-schema.org/draft-07/schema',
    title: config.title,
    type: 'object',
    description: '',
    additionalProperties: false,
    required: ['title'],
    properties: {
      title: {
        type: 'string',
        title: 'The Title',
      },
    },
    examples: [
      {
        title: 'Welcome to your new Pattern!',
      },
    ],
  };
  await fs.writeFile(thePath, JSON.stringify(theFile, null, '  ') + os.EOL);
}

async function writeTemplate(dir, config) {
  const thePath = join(dir, `${config.id}.twig`);
  const theFile = `
{% set classes = [
  '${config.id}',
] %}

<div class="{{ classes|join(' ') }}">
  <h4 class="${config.id}__title">{{ title }}</h4>
</div>
  `.trim();

  await fs.writeFile(thePath, theFile);
}

async function writeAllFiles(dir, config) {
  return Promise.all([
    writeMeta(dir, config),
    writeEntry(dir, config),
    writeSchema(dir, config),
    writeTemplate(dir, config),
  ]);
}

module.exports = {
  writeAllFiles,
};
