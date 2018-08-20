const schema = require('./media-block-schema');
const basicSchema = require('./media-block--basic.schema');

const meta = {
  id: 'media-block',
  title: 'Media Block',
  type: 'component',
  description: 'Image, Title, Body, and Buttons make this really flexible.',
  templates: [
    {
      name: '@components/_media-block--basic.twig',
      selector: '.media-block--basic',
      schema: basicSchema,
    },
    {
      name: '@components/_media-block.twig',
      selector: '.media-block',
      schema,
    },
  ],
  demoSize: 'l',
};

module.exports = {
  meta,
};
