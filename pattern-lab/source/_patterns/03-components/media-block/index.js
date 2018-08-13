const { image, paragraph, title } = require('@basalt/demo-data');
const schema = require('./media-block-schema.json');

schema.examples = [
  {
    title: title(),
    body: paragraph(),
    desc: title(),
    media: image(),
    media_alignment: 'top',
  },
];

const meta = {
  id: 'media-block',
  title: schema.title,
  type: 'component',
  // selector: '.media-block',
  template: '@components/_media-block.twig',
  schema,
};

module.exports = {
  meta,
};
