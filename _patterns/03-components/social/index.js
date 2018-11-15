const schema = require('./social-schema');

const uiSchema = {};

module.exports = {
  id: 'social',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_social.twig',
      selector: '.social',
      schema,
      uiSchema,
    },
  ],
};
