const { image, paragraph, text } = require('@basalt/demo-data');
const schema = require('./exec-bio-schema.json');

schema.examples = [
  {
    is_even: true,
    avatar: image(),
    name: text(),
    twitter: 'Basaltian',
    bio: paragraph(),
  },
];

const meta = {
  id: 'exec-bio',
  title: schema.title,
  type: 'component',
  template: '@components/_exec-bio.twig',
  schema,
};

module.exports = {
  meta,
};
