module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Basalt Logo',
  type: 'object',
  description: "The brand logo for Basalt.",
  properties: {
    is_light: {
      title: 'Is Light',
      type: 'boolean',
      description:
        'Whether the logo needs to be light (used when displayed on a dark background).',
    },
    extraClasses: {
      type: 'string',
    },
  },
  examples: [
    {
      is_light: false,
    },
    {
      is_light: true,
    },
  ],
};
