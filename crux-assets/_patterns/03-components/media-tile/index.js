const schema = require('./media-tile-schema.js');
const basicSchema = require('./media-tile--basic.schema');


const uiSchema = {
  body: {
    "ui:widget": "textarea",
    "ui:options": {
      rows: 15
    }
  },
  text_align: {
    "ui:widget": "radio",
  },
  text_align_vert: {
    "ui:widget": "radio",
  }
}

const meta = {
  id: 'media-tile',
  title: 'Media Tile',
  description: 'Full Image overlayed with optional Title, Body, and Buttons.',
  type: 'component',
  uses: ['inGrid', 'inSlice'],
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
  demoSize: 'l',
};

module.exports = {
  meta,
};
