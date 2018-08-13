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
  title: 'Media Block',
  type: 'component',
  templates: [
    {
      template: '@components/_media-block.twig',
      selector: '.media-block',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
