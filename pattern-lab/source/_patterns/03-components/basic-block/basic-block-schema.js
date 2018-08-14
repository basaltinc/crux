const { paragraph, title, text } = require('@basalt/demo-data');
const buttonSchema = require('../button/button-schema');

module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Basic Block',
  description: 'A block with a title, text, and CTA.',
  properties: {
    title: {
      title: 'Title',
      type: 'string',
      description: 'Block title.',
    },
    content: {
      title: 'Content',
      type: 'string',
      description: 'Can use HTML.',
    },
    buttons: {
      type: 'array',
      title: 'Buttons',
      description: 'List of objects passed to @components/_button.twig',
      items: buttonSchema,
    },
  },
  examples: [
    {
      title: 'A Community of Experts',
      content:
        'The Design System methodology is supported by a rich community of developers, designers, managers, and product owners. At Basalt we believe it is important to be active members of this community, both by contributing thought leadership and promoting the great work of others. New to Design Systems? Here are some fundamental resources to get started and learn more about the smart way to build for the modern web.',
      buttons: [
        {
          text: 'Join Us',
          url: '#',
          size: 'medium',
          color: 'green',
        },
      ],
    },
    {
      title: title(),
      content: paragraph(),
      buttons: [
        {
          text: text(),
          url: '#',
          size: 'large',
          color: 'green',
        },
      ],
    },
  ],
};
