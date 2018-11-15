const schema = require('./cta-schema.js');

const uiSchema = {
  text: {
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
  id: 'cta',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_cta.twig',
      selector: '.cta',
      schema,
      uiSchema,
    },
  ],
};
