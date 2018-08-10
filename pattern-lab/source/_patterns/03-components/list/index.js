const schema = require('./list-schema.json');

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
