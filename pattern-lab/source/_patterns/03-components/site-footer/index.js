const schema = require('./site-footer-schema.json');

const meta = {
  id: 'site-footer',
  title: schema.title,
  type: 'component',
  template: '@components/_site-footer.twig',
  schema,
};

module.exports = {
  meta,
};
