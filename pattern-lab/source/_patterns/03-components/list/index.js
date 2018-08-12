const { image, paragraph, title, text } = require('@basalt/demo-data');
const schema = require('./list-schema.json');

schema.examples = [
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
  title: schema.title,
  type: 'component',
  template: '@components/_list.twig',
  schema,
};

module.exports = {
  meta,
};
