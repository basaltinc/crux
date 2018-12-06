const schema = require('./social-schema.js');

module.exports = {
  id: 'social',
  templates: [
    {
      name: '@components/social.twig',
      schema,
    },
  ],
};
