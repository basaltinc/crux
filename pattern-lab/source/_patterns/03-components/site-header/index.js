const schema = require('./site-header-schema.json');

const meta = {
  id: 'site-header',
  title: schema.title,
  type: 'component',
  template: '@components/_site-header.twig',
  schema,
};

module.exports = {
  meta,
};
