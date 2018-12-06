const mediaBlockSchema = require('./media-block-schema.js');
const mediaBlockBasicSchema = require('./media-block--basic.schema.js');

module.exports = {
  id: 'media-block',
  templates: [
    {
      name: '@components/media-block.twig',
      schema: mediaBlockSchema,
    },
  ],
};
