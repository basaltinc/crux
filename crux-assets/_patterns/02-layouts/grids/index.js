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

const meta = {
  id: 'smart-grid',
  title: 'Smart Grid',
  type: 'layout',
  description: 'Flexible grid',
  uses: ['inSlice', 'inComponent'],
  templates: [
    {
      name: '@layouts/_smart-grid.twig',
      selector: '.smart-grid',
      schema,
      uiSchema,
    },
  ],
  demoSize: 'full',
};

module.exports = {
  meta,
};
