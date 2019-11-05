module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Icon',
  type: 'object',
  description: "Symbolize an action or link.",
  required: ['symbol'],
  properties: {
    symbol: {
      title: 'Icon Symbol',
      type: 'string',
      enum: [
        'copy',
        'external-link',
        'facebook',
        'instagram',
        'linkedin',
        'play',
        'twitter'
      ],
    },
  },
};
