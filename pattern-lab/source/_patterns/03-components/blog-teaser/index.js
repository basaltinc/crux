const schema = require('./basic-teaser-schema.json');

const meta = {
  id: 'basic-teaser',
  title: schema.title,
  type: 'component',
  template: '@components/_basic-teaser.twig',
  schema,
};

module.exports = {
  meta,
};
