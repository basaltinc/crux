const schema = require('./basic-block-schema.js');

const meta = {
  id: 'basic-block',
  title: 'Basic Block',
  type: 'component',
  status: 'draft',
  uses: ['inSlice', 'inGrid'],
  description: 'A block with a title, text, and CTA.',
  templates: [
    {
      name: '@components/_basic-block.twig',
      selector: '.basic-block',
      schema,
    },
  ],
  demoSize: 'm',
};

module.exports = {
  meta,
};
