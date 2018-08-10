const schema = require('./basic-block-schema.json');

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
