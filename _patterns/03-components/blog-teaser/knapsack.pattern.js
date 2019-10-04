const schema = require('./blog-teaser-schema.js');

module.exports = {
  id: 'blog-teaser',
  templates: [
    {
      alias: '@components/blog-teaser.twig',
      path: './blog-teaser.twig',
      id: 'twig',
      title: 'Twig',
      schema,
    },
  ],
};
