const { paragraph, title, text } = require('@basalt/demo-data');
const schema = require('./basic-block-schema.json');

schema.examples = [
  {
    title: 'A Community of Experts',
    content: 'The Design System methodology is supported by a rich community of developers, designers, managers, and product owners. At Basalt we believe it is important to be active members of this community, both by contributing thought leadership and promoting the great work of others. New to Design Systems? Here are some fundamental resources to get started and learn more about the smart way to build for the modern web.',
    buttons: [
      {
        text: 'Join Us',
        url: '#',
        size: 'medium',
        color: 'green',
      }
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
];

const meta = {
  id: 'basic-block',
  title: 'Basic Block',
  type: 'component',
  templates: [
    {
      name: '@components/_basic-block.twig',
      selector: '.basic-block',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
