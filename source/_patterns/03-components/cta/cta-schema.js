const buttonSchema = require('../button/button-schema');

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
    buttons: {
      title: 'Buttons',
      type: 'array',
      description: 'List of objects passed to @components/_button.twig',
      items: buttonSchema,
    },
    full_width: {
      title: 'Full Width',
      type: 'boolean',
      description: 'Gives element the class `u-full-width` so it will span the entire screen.'
    }
  },
  examples: [
    {
      text:
        'We build consistent, scalable, and maintainable solutions to power your digital strategy.',
      buttons: [
        {
          text: 'Get Started',
          url: '#',
          size: 'large',
          color: 'iron',
        },
      ],
      full_width: true,
    },
  ],
};
