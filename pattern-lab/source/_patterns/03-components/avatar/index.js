const { image } = require('@basalt/demo-data');
const schema = require('./avatar-schema.json');

schema.examples = [
  {
    size: 'xl',
    img: image(),
  }
]

const meta = {
  id: 'avatar',
  title: schema.title,
  type: 'component',
  template: '@components/_avatar.twig',
  schema,
};

module.exports = {
  meta,
};
