const schema = require('./list-schema');

const meta = {
  id: 'list',
  title: 'List',
  type: 'component',
  description: 'List',
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
