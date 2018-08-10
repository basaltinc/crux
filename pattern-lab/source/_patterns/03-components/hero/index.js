const schema = require('./hero-schema.json');

const meta = {
  id: 'hero',
  title: schema.title,
  type: 'component',
  template: '@components/_hero.twig',
  schema,
};

module.exports = {
  meta,
};
