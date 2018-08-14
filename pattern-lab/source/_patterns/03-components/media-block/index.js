const schema = require('./media-block-schema');

const meta = {
  id: 'media-block',
  title: 'Media Block',
  type: 'component',
  description: 'Image, Title, Body, and Buttons make this really flexible.',
  templates: [
    {
      name: '@components/_media-block.twig',
      selector: '.media-block',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
