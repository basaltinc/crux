module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Media Card',
  description: '',
  required: ['heading', 'imageUrl'],
  properties: {
    heading: {
      type: 'string',
      title: 'Heading',
    },
    bodyCopy: {
      type: 'string',
      title: 'Body Copy',
    },
    href: {
      type: 'string',
      title: 'Link (Href)',
    },
    imageUrl: {
      title: 'Image Url',
      type: 'string',
      description: 'URL for the image source.',
    },
    imageIsAvatar: {
      type: 'boolean',
      title: 'Image is Avatar',
      default: false,
      description:
        'Displays the image given as our avatar component — a hexagonal shape with a colorful offset shadow. Please use a square image if selecting this option.',
    },
    mediaAlignment: {
      type: 'string',
      title: 'Media Alignment',
      enum: ['left', 'right'],
      default: 'right',
    },
  },
};
