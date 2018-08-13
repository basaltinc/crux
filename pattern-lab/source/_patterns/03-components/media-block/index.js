const { image, paragraph, title } = require('@basalt/demo-data');
const schema = require('./media-block-schema.json');

schema.examples = [
  {
    title: 'What Is Basalt?',
    body:
      'Basalt represents our roots—the Pacific Northwest, and our belief that quality design begins with rock‑solid scalable components.',
    desc: 'A Community of Experts',
    media: '/assets/images/brand-stock/julentto-photography-184055.jpg',
    media_alignment: 'right',
    media_size: 'm',
    buttons: [
      {
        text: 'Read More',
        url: '#',
        size: 'medium',
        color: 'green',
      },
    ],
  },
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
  title: 'Media Block',
  type: 'component',
  templates: [
    {
      name: '@components/_media-block.twig',
      selector: '.media-block',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
