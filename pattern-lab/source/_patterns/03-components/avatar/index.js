const schema = require('./avatar-schema.json');

const meta = {
  id: 'avatar',
  title: schema.title,
  type: 'component',
  template: '@components/_avatar.twig',
  schema,
};

module.exports = {
  meta,
};
