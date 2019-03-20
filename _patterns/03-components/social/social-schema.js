module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  description: 'Collection of Social Media Icons',
  title: 'Social Media Icons',
  properties: {
    is_inverted: {
      type: 'boolean',
      title: 'Is Inverted',
      description: 'Use inverted for colorful backgrounds',
      default: false,
    },
  },
  examples: [
    {
      is_inverted: true,
    },
    {
      is_inverted: false,
    },
  ],
};
