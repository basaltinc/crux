const schema = require('./list-schema.js');

module.exports = {
  id: 'list',
  templates: [
    {
      name: '@components/list.twig',
      schema,
    },
  ],
};
