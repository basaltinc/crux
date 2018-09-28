const schema = require('./media-tile-schema.js');
const basicSchema = require('./media-tile--basic.schema');

const uiSchema = {
  body: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 15,
    },
  },
  text_align: {
    'ui:widget': 'radio',
  },
  text_align_vert: {
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
  id: 'media-tile',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_media-tile.twig',
      selector: '.media-tile',
      schema,
      uiSchema,
    },
    {
      name: '@components/_media-tile--basic.twig',
      selector: '.media-tile--basic',
      schema: basicSchema,
      uiSchema,
    },
  ],
};
