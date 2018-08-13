const { image } = require('@basalt/demo-data');
const schema = require('./avatar-schema.json');

schema.examples = [
  {
    size: 'xl',
    img: '/assets/images/avatar-example.jpg',
  },
  {
    size: 'xl',
    img: image(),
  },
];

const meta = {
  id: 'avatar',
  title: 'Avatar',
  type: 'component',
  templates: [
    {
      name: '@components/_avatar.twig',
      selector: '.avatar',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
