const schema = require('./logo-schema.js');

module.exports = {
  id: 'logo',
  templates: [
    {
      alias: '@components/logo.twig',
      path: './logo.twig',
      id: 'twig',
      title: 'Twig',
      schema,
    },
  ],
};
