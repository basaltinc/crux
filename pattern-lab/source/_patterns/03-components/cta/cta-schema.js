module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  title: 'Call To Action',
  type: 'object',
  description:
    "This 'Call To Action' is designed to specifically encourage the user to contact Basalt.",
  properties: {
    text: {
      title: 'Call to Action Text',
      type: 'string',
      description:
        'This is the text that appears above the button in the call to action slab.',
    },
  },
  examples: [
    {
      text:
        'We build consistent, scalable, and maintainable solutions to power your digital strategy.',
    },
  ],
};
