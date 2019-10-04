const schema = require('./social-schema.js');

module.exports = {
  id: 'social',
  templates: [
    {
      alias: '@components/social.twig',
      path: './social.twig',
      id: 'twig',
      title: 'Twig',
      schema,
    },
  ],
};
