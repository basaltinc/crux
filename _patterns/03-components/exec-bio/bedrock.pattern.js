const schema = require('./exec-bio-schema.js');

module.exports = {
  id: 'exec-bio',
  templates: [
    {
      name: '@components/exec-bio.twig',
      schema,
    },
  ],
};
