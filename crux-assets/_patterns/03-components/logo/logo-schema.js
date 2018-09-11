module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  description: 'Logo',
  title: 'Logo',
  properties: {
    imgSrc: {
      type: 'string',
      title: 'Image Source',
      description: 'Path to image.',
    },
    url: {
      title: 'Url',
      type: 'string',
    },
    size: {
      title: 'Size',
      type: 'string',
      default: 'auto',
      enum: ['auto', 'small', 'medium', 'large', 'jumbo'],
      enumNames: ['Auto', 'Small', 'Medium', 'Large', 'Jumbo'],
    },
    greyscale: {
      title: 'Greyscale',
      type: 'boolean',
      description: 'Display the logo in greyscale?',
    },
  },
  examples: [
    {
      imgSrc: '/assets/images/logos/main.png',
      url: 'http://www.basalt.io',
      size: 'jumbo',
      greyscale: false,
    },
  ],
  required: ['imgSrc', 'url'],
};
