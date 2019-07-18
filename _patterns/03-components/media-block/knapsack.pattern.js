const mediaBlockSchema = require('./media-block-schema.js');
const mediaBlockBasicSchema = require('./media-block--basic.schema.js');

module.exports = {
  id: 'media-block',
  templates: [
    {
      alias: '@components/media-block.twig',
      path: './media-block.twig',
      id: 'twig',
      title: 'Twig - Media Block',
      schema: mediaBlockSchema,
    },
    {
      alias: '@components/media-block--basic.twig',
      path: './media-block--basic.twig',
      id: 'twig-basic',
      title: 'Twig - Media Block Basic',
      schema: mediaBlockBasicSchema,
    },
  ],
};
