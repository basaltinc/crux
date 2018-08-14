const mainSchema = require('./media-tile-schema');

const schema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Media Tile',
  description: 'Full Image overlayed with optional Title, Body, and Buttons.',
  properties: {},
};

const { title, url } = mainSchema.properties;

schema.properties = {
  title,
  url,
};

module.exports = schema;
