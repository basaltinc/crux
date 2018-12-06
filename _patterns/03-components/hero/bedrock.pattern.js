const schema = require('./hero-schema.js');

module.exports = {
  id: 'hero',
  templates: [
    {
      name: '@components/hero.twig',
      schema,
    },
  ],
};
