const schema = require('./basic-block-schema.js');

const uiSchema = {
  content: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 10,
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
  id: 'basic-block',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_basic-block.twig',
      selector: '.basic-block',
      schema,
      uiSchema,
    },
  ],
};
