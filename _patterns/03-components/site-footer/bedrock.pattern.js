const schema = require('./site-footer-schema.js');

module.exports = {
  id: 'site-footer',
  templates: [
    {
      name: '@components/site-footer.twig',
      schema,
    },
  ],
};
