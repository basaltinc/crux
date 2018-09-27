const schema = require('./site-header-schema');

const uiSchema = {};

module.exports = {
  id: 'site-header',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_site-header.twig',
      selector: '.site-header',
      schema,
      uiSchema,
    },
  ],
};
