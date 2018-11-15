const { image, paragraph, title: dummyTitle } = require('@basalt/demo-data');
const mainSchema = require('./media-tile-schema');

/* eslint-disable camelcase */
const schema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Basic Media Tile',
  description: 'Full Image overlayed with optional Title, Body, and Buttons.',
  properties: {},
  examples: [
    {
      title: 'Who We Are',
      title_text_color: 'white',
      body:
        'We founded Basalt to advance the industry with a better approach to web development and design. We are developers, designers, agency executives, entrepreneurs, marketers, and innovators.',
      body_text_color: 'white',
      min_height: 'm',
      media_padding: '0',
      desc: 'Who We Are',
      background_image: '/assets/images/brand-stock/rawpixel-com-191102.jpg',
    },
    {
      title: dummyTitle(),
      body: paragraph(),
      desc: dummyTitle(),
      background_image: image(),
      title_text_color: 'white',
      body_text_color: 'white',
      content_padding: 'l',
      text_align: 'center',
      title_size: '2',
    },
  ],
};

const {
  title,
  title_text_color,
  body,
  body_text_color,
  media,
} = mainSchema.properties;

schema.properties = {
  title,
  title_text_color,
  body,
  body_text_color,
  media,
};

module.exports = schema;
