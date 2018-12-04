const schema = require('./media-tile-schema.js');

module.exports = {
  id: 'media-tile',
  templates: [
    {
      name: '@components/media-tile.twig',
      schema,
    },
  ],
};
