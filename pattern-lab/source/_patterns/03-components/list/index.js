const { image, paragraph, title, text } = require('@basalt/demo-data');
const schema = require('./list-schema.json');

schema.examples = [
  {
    list_items:
      'Json, React, Arrays, If Statements, Math, Logic, Jokes, Internet, Sorcery',
    text_size: 'xl',
    bullets: false,
    ordered: true,
    columns: '3',
  },
  {
    list_items: 'Json, React, Arrays, If Statements, Math',
    text_size: 'm',
    bullets: false,
    ordered: false,
    columns: '1',
  },
];

const meta = {
  id: 'list',
  title: 'List',
  type: 'component',
  templates: [
    {
      name: '@components/_list.twig',
      selector: '.list',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
