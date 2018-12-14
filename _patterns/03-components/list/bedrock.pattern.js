const schema = require('./list-schema.js');

module.exports = {
  id: 'list',
  templates: [
    {
      alias: '@components/list.twig',
      path: './list.twig',
      id: 'twig',
      title: 'Twig',
      schema,
    },
  ],
};
