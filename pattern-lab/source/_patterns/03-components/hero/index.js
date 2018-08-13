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
  title: 'Hero',
  type: 'component',
  templates: [
    {
      name: '@components/_hero.twig',
      selector: '.hero',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
