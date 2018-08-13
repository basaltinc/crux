const { image, paragraph, title, text } = require('@basalt/demo-data');
const schema = require('./hero-schema.json');

schema.examples = [
  {
    title: 'What We Do',
    body: 'Design Systems, start to finish.',
    alignment_all: 'center',
    image: '/assets/images/brand-stock/rawpixel-com-191102.jpg',
    image_overlay: 'black',
    buttons: [
      {
        text: 'Learn More',
        url: 'http://www.basalt.io',
        size: 'medium',
        color: 'iron',
      },
    ],
  },
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
