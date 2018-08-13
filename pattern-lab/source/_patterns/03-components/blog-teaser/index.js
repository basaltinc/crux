const { image, paragraph, title } = require('@basalt/demo-data');
const schema = require('./blog-teaser-schema.json');

schema.examples = [
  {
    title: 'A Tale of Two Lego Cities',
    author: 'Nam Ho',
    teaser_avatar: '/assets/images/avatar-example2.jpg',
    date: 'November 8, 2017',
    summary: 'You don\'t re-make a set of Legos every time you build a castle. We believe building for the web should be no different.',
    image: '/assets/images/legos.jpg',
    is_even: true,
  },
  {
    title: title(),
    author: 'John Doe',
    teaser_avatar: image(),
    date: 'January 1st, 2000',
    summary: paragraph(),
    image: image(),
    is_even: true,
  },
];

const meta = {
  id: 'blog-teaser',
  title: 'Blog Teaser',
  type: 'component',
  templates: [
    {
      name: '@components/_blog-teaser.twig',
      selector: '.blog-teaser',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
