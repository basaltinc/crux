const schema = require('./media-tile-schema.js');
const schemaBasic = require('./media-tile--basic.schema.js');

module.exports = {
  id: 'media-tile',
  templates: [
    {
      alias: '@components/media-tile.twig',
      path: './media-tile.twig',
      id: 'twig',
      title: 'Twig - Media Tile',
      schema,
    },
    {
      alias: '@components/media-tile--basic.twig',
      path: './media-tile--basic.twig',
      id: 'twig-basic',
      title: 'Twig - Media Tile Basic',
      schema: schemaBasic,
    },
  ],
};
