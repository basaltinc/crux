const schema = require('./button-schema');

const uiSchema = {
  size: {
    'ui:widget': 'radio',
  },
};

module.exports = {
  id: 'button',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_button.twig',
      selector: '.button',
      schema,
      uiSchema,
      isInline: true,
    },
  ],
};
