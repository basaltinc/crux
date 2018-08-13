const { image, paragraph, title } = require('@basalt/demo-data');
const schema = require('./media-tile-schema.json');

schema.examples = [
  {
    title: title(),
    body: paragraph(),
    desc: title(),
    background_image: image(),
    title_text_color: 'white',
    body_text_color: 'white',
    content_padding: 'l',
    text_align: 'center',
    title_size: '2',
  },
];

const meta = {
  id: 'media-tile',
  title: schema.title,
  type: 'component',
  template: '@components/_media-tile.twig',
  schema,
};

module.exports = {
  meta,
};
