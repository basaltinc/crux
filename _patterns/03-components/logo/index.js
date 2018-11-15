const schema = require('./logo-schema');

const uiSchema = {
  size: {
    'ui:widget': 'radio',
  },
};

module.exports = {
  id: 'logo',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_logo.twig',
      selector: '.logo',
      schema,
      uiSchema,
    },
  ],
};
