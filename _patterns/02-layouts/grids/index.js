const schema = require('./smart-grid.schema');

const uiSchema = {
  rowItems: {
    small: {
      'ui:widget': 'updown',
    },
    medium: {
      'ui:widget': 'updown',
    },
    large: {
      'ui:widget': 'updown',
    },
    xlarge: {
      'ui:widget': 'updown',
    },
  },
};

module.exports = {
  id: 'smart-grid',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@layouts/_smart-grid.twig',
      selector: '.smart-grid',
      schema,
      uiSchema,
    },
  ],
};
