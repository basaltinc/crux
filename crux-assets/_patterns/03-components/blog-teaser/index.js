const schema = require('./blog-teaser-schema.js');

const uiSchema = {
  summary: {
    "ui:widget": "textarea",
    "ui:options": {
      rows: 10
    }
  }
}

const meta = {
  id: 'blog-teaser',
  title: 'Blog Teaser',
  type: 'component',
  description: 'A block with a title, text, and CTA.',
  uses: ['inSlice', 'inGrid'],
  templates: [
    {
      name: '@components/_blog-teaser.twig',
      selector: '.blog-teaser',
      schema,
      uiSchema,
    },
  ],
  demoSize: 'l',
};

module.exports = {
  meta,
};
