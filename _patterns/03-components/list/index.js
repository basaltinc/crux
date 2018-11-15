const schema = require('./list-schema');

const uiSchema = {
  display: {
    'ui:widget': 'radio',
  },
  columns: {
    'ui:widget': 'radio',
  },
};

module.exports = {
  id: 'list',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_list.twig',
      selector: '.list',
      schema,
      uiSchema,
    },
  ],
};
