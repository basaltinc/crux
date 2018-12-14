const schema = require('./exec-bio-schema.js');

module.exports = {
  id: 'exec-bio',
  templates: [
    {
      alias: '@components/exec-bio.twig',
      path: './exec-bio.twig',
      id: 'twig',
      title: 'Twig',
      schema,
    },
  ],
};
