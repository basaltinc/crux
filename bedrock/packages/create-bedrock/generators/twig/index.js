const memFs = require('mem-fs');
const editor = require('mem-fs-editor');
const { join } = require('path');

const store = memFs.create();
const fs = editor.create(store);

async function twigGen(config) {
  console.log('twig generate starting...');

  fs.copyTpl(join(__dirname, 'templates'), process.cwd(), config);

  fs.commit(() => {
    console.log('files written');
  });
}

module.exports = twigGen;
