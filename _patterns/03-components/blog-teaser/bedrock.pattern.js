const schema = require('./blog-teaser-schema.js');

module.exports = {
  id: 'blog-teaser',
  templates: [
    {
      name: '@components/blog-teaser.twig',
      schema,
    },
  ],
};
