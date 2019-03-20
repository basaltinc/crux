const { image, paragraph, title } = require('@basalt/demo-data');

module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Hero',
  description:
    'The Hero component is a full width slab intended to draw the attention of the user.',
  properties: {
    title: {
      title: 'Title',
      description: 'The main heading of the Hero.',
      type: 'string',
    },
    body: {
      title: 'Body Content',
      description: 'The main text or html of the hero component',
      type: 'string',
    },
    alignment_all: {
      title: 'Content Alignment',
      type: 'string',
      description: 'Alignment relationship between content and title.',
      enum: ['left', 'center', 'right'],
      enumNames: [
        'Left Title, Right Content',
        'Center Everything',
        'Right Title, Left Content',
      ],
    },
    image: {
      title: 'Background Image',
      type: 'string',
      description: 'Path to image.',
    },
    image_overlay: {
      title: 'Image Overlay',
      type: 'string',
      description: 'Color of the image overlay.',
      enum: ['blue', 'green', 'black', 'yellow', 'darker', 'none'],
      enumNames: ['Blue', 'Green', 'Black', 'Yellow', 'Darker', 'None'],
    },
    text_color: {
      title: 'Text Color',
      type: 'string',
      enum: ['white', 'blue', 'green', 'yellow', 'black'],
      enumNames: ['White', 'Blue', 'Green', 'Yellow', 'Black'],
    },
    is_homepage: {
      title: 'Is Homepage',
      type: 'boolean',
      default: false,
    },
  },
  examples: [
    {
      title: 'What We Do',
      body: 'Design Systems, start to finish.',
      alignment_all: 'center',
      image: '/images/brand-stock/rawpixel-com-191102.jpg',
      image_overlay: 'black',
      text_color: 'white',
    },
    {
      title: title(),
      body: paragraph(),
      desc: title(),
      image_overlay: 'black',
      alignment_all: 'left',
      image: image(),
      text_color: 'white',
    },
  ],
};
