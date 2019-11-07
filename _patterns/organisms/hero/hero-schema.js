const anchoredBlurbSchema = require('../../molecules/anchored-blurb/anchored-blurb-schema');

module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Hero',
  type: 'object',
  description: "Display important page messaging.",
  required: ['imageUrl'],
  properties: {
    imageUrl: {
      title: 'Image Url',
      type: 'string',
      description:
        'URL for the background image.',
    },
    padding: {
      title: "Hero Top/Bottom Padding",
      type: "number",
      default: 240,
      description:
        'Amount of space (in px) above and below the anchored-blob.'
    },
    anchoredBlurbs: {
      title: 'Anchored Blurb',
      type: 'array',
      items: anchoredBlurbSchema,
    },
  },
};
