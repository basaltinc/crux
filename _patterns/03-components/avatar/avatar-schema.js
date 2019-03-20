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
      img: '/images/demos/avatar-example2.jpg',
    },
    {
      size: 'xl',
      img: '/images/demos/avatar-example.jpg',
    },
  ],
};
