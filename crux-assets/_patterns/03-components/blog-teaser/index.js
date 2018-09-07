const schema = require('./blog-teaser-schema.js');


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
    },
  ],
  demoSize: 'l',
};

module.exports = {
  meta,
};
