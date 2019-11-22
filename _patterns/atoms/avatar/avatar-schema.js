module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Avatar',
  type: 'object',
  description: 'Hexagonal avatar picture',
  properties: {
    imageUrl: {
      title: 'Image Url',
      type: 'string',
      description: 'URL for the image.',
    },
    altText: {
      title: 'Alt Text',
      type: 'string',
      description: 'Name of the person, or other alt text applicable.'
    },
    hasShadow: {
      title: 'Has shadow',
      type: 'boolean',
      description: 'Use to add a colorful offset shadow',
    },
    size: {
      title: 'Size',
      type: 'string',
      enum: ['s', 'm', 'l'],
      enumNames: ['Small', 'Medium', 'Large'],
      default: 'm',
    },
  },
};
