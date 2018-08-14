const schema = require('./exec-bio-schema.js');

const meta = {
  id: 'exec-bio',
  title: 'Executive Bio',
  type: 'component',
  description:
    'The Executive Bio a UI component designed to profile members of the executive team.',
  templates: [
    {
      name: '@components/_exec-bio.twig',
      selector: '.exec-bio',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
