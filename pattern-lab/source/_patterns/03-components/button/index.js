const { text } = require('@basalt/demo-data');
const schema = require('./button-schema.json');

schema.examples = [
  {
    text: 'Click Me!',
    url: 'http://www.basalt.io',
    size: 'large',
    color: 'blue',
  },
  {
    text: text(),
    url: 'http://www.basalt.io',
    size: 'small',
    color: 'blue--light',
  },
];

const meta = {
  id: 'button',
  title: 'Button',
  type: 'component',
  templates: [
    {
      name: '@components/_button.twig',
      selector: '.button',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
