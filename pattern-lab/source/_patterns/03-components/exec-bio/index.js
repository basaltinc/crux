const schema = require('./exec-bio-schema.json');

const meta = {
  id: 'exec-bio',
  title: schema.title,
  type: 'component',
  template: '@components/_exec-bio.twig',
  schema,
};

module.exports = {
  meta,
};
