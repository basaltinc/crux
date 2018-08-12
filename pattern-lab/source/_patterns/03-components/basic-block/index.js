const { paragraph, title, text } = require('@basalt/demo-data');
const schema = require('./basic-block-schema.json');

schema.examples = [
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
  title: schema.title,
  type: 'component',
  template: '@components/_basic-block.twig',
  schema,
};

module.exports = {
  meta,
};
