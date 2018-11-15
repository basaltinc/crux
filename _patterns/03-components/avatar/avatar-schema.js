const { image } = require('@basalt/demo-data');

module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Avatar',
  description: "Show a person's profile picture.",
  properties: {
    size: {
      title: 'Size',
      type: 'string',
      enum: ['s', 'm', 'l', 'xl'],
      enumNames: ['Small', 'Medium', 'Large', 'Extra Large'],
    },
    img: {
      title: 'Image',
      type: 'string',
      description: 'Path to image.',
    },
  },
  examples: [
    {
      size: 'xl',
      img: '/assets/images/avatar-example.jpg',
    },
    {
      size: 'xl',
      img: image(),
    },
  ],
  dosAndDonts: [
    {
      title: '',
      items: [
        {
          image: '/assets/images/dos-and-donts/avatars/avatars-dont.png',
          caption: 'add a border to avatars.',
          do: false,
        },
        {
          title: 'Do Example',
          image: '/assets/images/dos-and-donts/avatars/avatars-do.png',
          caption: 'use avatars as styled.',
          do: true,
        },
      ],
    },
  ],
};
