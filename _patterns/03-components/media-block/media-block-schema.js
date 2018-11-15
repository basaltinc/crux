const { image, paragraph, title } = require('@basalt/demo-data');
const buttonSchema = require('../button/button-schema');

module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Media Block',
  description: 'Image, Title, Body, and Buttons make this really flexible.',
  properties: {
    title: {
      title: 'Title',
      type: 'string',
      description: 'Main heading of media block.',
    },
    inset_title: {
      title: 'Inset Title',
      type: 'boolean',
      description: 'Insets the title.',
    },
    title_bg_color: {
      title: 'Title Background Color',
      type: 'string',
      description: 'Any utility color class.',
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
    title_text_color: {
      title: 'Title Text Color',
      description: 'Any utility color class.',
      type: 'string',
      default: 'black',
      enum: [
        'black',
        'blue--light',
        'green',
        'iron',
        'yellow',
        'white',
        'blue',
      ],
      enumNames: [
        'Black',
        'Light Blue',
        'Green',
        'Iron',
        'Yellow',
        'White',
        'Blue',
      ],
    },
    body: {
      title: 'Body Content',
      type: 'string',
      description: 'Body text of the media block.',
    },
    media: {
      title: 'Media',
      type: 'string',
      description: 'Path to image.',
    },
    show_full_media: {
      title: 'Show Full Media',
      type: 'boolean',
      description:
        "Show full image. Default is to 'cover' the whole side the media item is on: this allows matching the height of the text but does not show full media item.",
    },
    media_position: {
      title: 'Media Position',
      type: 'string',
      description:
        'When Show Full Media is on, this positions the background image',
      enum: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      enumNames: [
        'Top Left',
        'Top Center',
        'Top Right',
        'Bottom Left',
        'Bottom Center',
        'Bottom Right',
      ],
    },
    media_alignment: {
      title: 'Media Alignment',
      type: 'string',
      enum: ['left', 'right', 'top', 'bottom'],
      enumNames: ['Left', 'Right', 'Top', 'Bottom'],
    },
    media_padding: {
      title: 'Media Padding',
      type: 'string',
      description: 'Space around the media',
      enum: ['0', 's', 'm', 'l', 'xl', 'xxl'],
      enumNames: [
        'None',
        'Small',
        'Medium',
        'Large',
        'Extra Large',
        'XX Large',
      ],
    },
    media_size: {
      title: 'Media Size',
      type: 'string',
      description: 'Size of media compared to content',
      enum: ['s', 'm', 'l', 'xl'],
      enumNames: ['Small', 'Medium', 'Large', 'Extra large'],
    },
    buttons: {
      title: 'Buttons',
      type: 'array',
      description: 'List of objects passed to @components/_button.twig',
      items: buttonSchema,
    },
  },
  examples: [
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
  ],
};
