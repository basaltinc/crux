const schema = require('./site-footer-schema');

const meta = {
  id: 'site-footer',
  title: 'Site Footer',
  type: 'component',
  description: 'A global site footer',
  templates: [
    {
      name: '@components/_site-footer.twig',
      selector: '.site-footer',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
