const schema = require('./site-header-schema.js');

module.exports = {
  id: 'site-header',
  templates: [
    {
      name: '@components/site-header.twig',
      schema,
    },
  ],
};
