const schema = require('./media-block-schema');
const basicSchema = require('./media-block--basic.schema');

const meta = {
  id: 'media-block',
  title: 'Media Block',
  type: 'component',
  description: 'Image, Title, Body, and Buttons make this really flexible.',
  uses: ['inGrid', 'inSlice'],
  templates: [
    {
      name: '@components/_media-block.twig',
      selector: '.media-block',
      schema,
    },
    {
      name: '@components/_media-block--basic.twig',
      selector: '.media-block--basic',
      schema: basicSchema,
    },
  ],
  demoSize: 'l',
};

module.exports = {
  meta,
};
