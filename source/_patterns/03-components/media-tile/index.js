const schema = require('./media-tile-schema.js');
const basicSchema = require('./media-tile--basic.schema');

const meta = {
  id: 'media-tile',
  title: 'Media Tile',
  description: 'Full Image overlayed with optional Title, Body, and Buttons.',
  type: 'component',
  templates: [
    {
      name: '@components/_media-tile.twig',
      selector: '.media-tile',
      schema,
    },
    {
      name: '@components/_media-tile--basic.twig',
      selector: '.media-tile--basic',
      schema: basicSchema,
    },
  ],
  demoSize: 'l',
};

module.exports = {
  meta,
};
