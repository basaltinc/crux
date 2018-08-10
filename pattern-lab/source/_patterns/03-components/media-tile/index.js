const schema = require('./media-tile-schema.json');

const meta = {
  id: 'media-tile',
  title: schema.title,
  type: 'component',
  template: '@components/_media-tile.twig',
  schema,
};

module.exports = {
  meta,
};
