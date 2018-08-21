const { image, paragraph, title, text } = require('@basalt/demo-data');

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
    content_classes: {
      type: 'array',
      title: 'Content Classes',
      description: 'Used for setting BG and text color.',
      items: {
        title: 'Class Name',
        type: 'string',
      },
    },
    buttons: {
      title: 'Buttons',
      type: 'array',
      description: 'Array of button data.',
      items: {
        type: 'object',
        title: 'Button',
        description: "Buttons are for clickin' and tappin'!",
        properties: {
          text: {
            title: 'Text',
            type: 'string',
          },
          url: {
            title: 'Url',
            type: 'string',
            default: '#',
          },
          size: {
            title: 'Size',
            type: 'string',
            default: 'small',
            enum: ['small', 'medium', 'large', 'jumbo'],
            enumNames: ['Small', 'Medium', 'Large', 'Jumbo'],
          },
          color: {
            title: 'Background Color',
            type: 'string',
            default: 'green',
            enum: [
              'blue',
              'blue--light',
              'green',
              'iron',
              'yellow',
              'white',
              'black',
            ],
            enumNames: [
              'Blue',
              'Light Blue',
              'Green',
              'Iron',
              'Yellow',
              'White',
              'Black',
            ],
          },
        },
      },
    },
  },
  examples: [
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
  ],
};
