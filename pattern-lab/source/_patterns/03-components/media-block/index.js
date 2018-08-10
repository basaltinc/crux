const schema = require('./media-block-schema.json');

const meta = {
  id: 'media-block',
  title: schema.title,
  type: 'component',
  template: '@components/_media-block.twig',
  schema,
};

module.exports = {
  meta,
};
