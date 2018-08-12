const { image, paragraph, title } = require('@basalt/demo-data');
const schema = require('./blog-teaser-schema.json');

schema.examples = [
  {
    title: title(),
    author: 'John Doe',
    teaser_avatar: image(),
    date: 'January 1st, 2000',
    summary: paragraph(),
    color: 'blue--light',
    image: image(),
    is_even: true,
  },
];

const meta = {
  id: 'blog-teaser',
  title: schema.title,
  type: 'component',
  template: '@components/_blog-teaser.twig',
  schema,
};

module.exports = {
  meta,
};
