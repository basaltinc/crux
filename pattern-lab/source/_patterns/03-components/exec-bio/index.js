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
  title: 'Executive Bio',
  type: 'component',
  templates: [
    {
      name: '@components/_exec-bio.twig',
      selector: '.exec-bio',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
