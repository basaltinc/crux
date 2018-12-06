const schema = require('./cta-schema.js');

module.exports = {
  id: 'cta',
  templates: [
    {
      name: '@components/cta.twig',
      schema,
    },
  ],
};
