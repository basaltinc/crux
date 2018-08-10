const schema = require('./social-schema.json');

const meta = {
  id: 'social',
  title: schema.title,
  type: 'component',
  template: '@components/_social.twig',
  schema,
};

module.exports = {
  meta,
};
