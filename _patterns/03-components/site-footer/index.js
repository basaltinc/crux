const schema = require('./site-footer-schema');

const uiSchema = {};

module.exports = {
  id: 'site-footer',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_site-footer.twig',
      selector: '.site-footer',
      schema,
      uiSchema,
    },
  ],
};
