const schema = require('./site-footer-schema.js');

module.exports = {
  id: 'site-footer',
  templates: [
    {
      alias: '@components/site-footer.twig',
      path: './site-footer.twig',
      id: 'twig',
      title: 'Twig',
      schema,
    },
  ],
};
