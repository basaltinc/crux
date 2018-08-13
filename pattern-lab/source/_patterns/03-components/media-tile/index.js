const { image, paragraph, title } = require('@basalt/demo-data');
const schema = require('./media-tile-schema.json');

schema.examples = [
  {
    title: 'Who We Are',
    text_align: 'center',
    title_size: '1',
    title_text_color: 'white',
    body:
      'We founded Basalt to advance the industry with a better approach to web development and design. We are developers, designers, agency executives, entrepreneurs, marketers, and innovators.',
    body_text_color: 'white',
    body_text_size: 'l',
    content_padding: 'l',
    image_overlay: 'black',
    min_height: 'm',
    media_padding: '0',
    buttons: [
      {
        text: 'Learn More',
        url: '#',
        size: 'medium',
        color: 'yellow',
      },
    ],
    desc: 'Who We Are',
    background_image: '/assets/images/brand-stock/clarisse-meyer-304306.jpg',
  },
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
  title: 'Media Tile',
  type: 'component',
  templates: [
    {
      name: '@components/_media-tile.twig',
      selector: '.media-tile',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
