const schema = require('./blog-teaser-schema.js');

const uiSchema = {
  summary: {
    'ui:widget': 'textarea',
    'ui:options': {
      rows: 10,
    },
  },
};

module.exports = {
  id: 'blog-teaser',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@components/_blog-teaser.twig',
      selector: '.blog-teaser',
      schema,
      uiSchema,
    },
  ],
};
