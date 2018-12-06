const schema = require('./logo-schema.js');

module.exports = {
  id: 'logo',
  templates: [
    {
      name: '@components/logo.twig',
      schema,
    },
  ],
};
