const schema = require('./basic-block-schema.js');

module.exports = {
  id: 'basic-block',
  templates: [
    {
      alias: '@components/basic-block.twig',
      path: './basic-block.twig',
      id: 'twig',
      title: 'Twig',
      schema,
    },
  ],
};
