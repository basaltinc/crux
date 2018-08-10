const schema = require('./button-schema.json');

const meta = {
  id: 'button',
  title: schema.title,
  type: 'component',
  template: '@components/_button.twig',
  schema,
};

module.exports = {
  meta,
};
