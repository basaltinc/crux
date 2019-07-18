const schema = require('./site-header-schema.js');

module.exports = {
  id: 'site-header',
  templates: [
    {
      alias: '@components/site-header.twig',
      path: './site-header.twig',
      id: 'twig',
      title: 'Twig',
      schema,
    },
  ],
};
