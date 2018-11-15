const schema = require('./avatar-schema.js');

const uiSchema = {
  size: {
    'ui:widget': 'radio',
  },
};

module.exports = {
  id: 'avatar',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_avatar.twig',
      selector: '.avatar',
      schema,
      uiSchema,
    },
  ],
};
