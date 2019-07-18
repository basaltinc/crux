const schema = require('./cta-schema.js');

module.exports = {
  id: 'cta',
  templates: [
    {
      alias: '@components/cta.twig',
      path: './cta.twig',
      id: 'twig',
      title: 'Twig',
      schema,
    },
  ],
};
