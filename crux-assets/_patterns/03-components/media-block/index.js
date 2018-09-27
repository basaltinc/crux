const schema = require('./media-block-schema');
const basicSchema = require('./media-block--basic.schema');

const uiSchema = {
  body: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 10,
    },
  },
  media_alignment: {
    'ui:widget': 'radio',
  },
  media_size: {
    'ui:widget': 'radio',
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
  id: 'media-block',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_media-block.twig',
      selector: '.media-block',
      schema,
      uiSchema,
    },
    {
      name: '@components/_media-block--basic.twig',
      selector: '.media-block--basic',
      schema: basicSchema,
      uiSchema,
    },
  ],
};
