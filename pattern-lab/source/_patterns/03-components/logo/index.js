const schema = require('./logo-schema.json');

const meta = {
  id: 'logo',
  title: schema.title,
  type: 'component',
  template: '@components/_logo.twig',
  schema,
};

module.exports = {
  meta,
};
