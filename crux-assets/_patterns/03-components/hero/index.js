const schema = require('./hero-schema');

const uiSchema = {
  alignment_all: {
    'ui:widget': 'radio',
  },
  body: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 5,
    },
  },
  buttons: {
    items: {
      size: {
        'ui:widget': 'radio',
      },
    },
  },
};

module.exports = {
  id: 'hero',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_hero.twig',
      selector: '.hero',
      schema,
      uiSchema,
    },
  ],
};
