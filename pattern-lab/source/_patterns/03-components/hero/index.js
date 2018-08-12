const { image, paragraph, title, text } = require('@basalt/demo-data');
const schema = require('./hero-schema.json');

schema.examples = [
  {
    title: title(),
    body: paragraph(),
    desc: title(),
    image_overlay: 'black',
    alignment_all: 'left',
    image: image(),
    buttons: [
      {
        text: text(),
      },
      {
        text: text(),
      },
    ],
  },
];

const meta = {
  id: 'hero',
  title: schema.title,
  type: 'component',
  template: '@components/_hero.twig',
  schema,
};

module.exports = {
  meta,
};
