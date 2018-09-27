const schema = require('./exec-bio-schema.js');

const uiSchema = {
  bio: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 15,
    },
  },
};

module.exports = {
  id: 'exec-bio',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_exec-bio.twig',
      selector: '.exec-bio',
      schema,
      uiSchema,
    },
  ],
};
