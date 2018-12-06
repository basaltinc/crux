const schema = require('./basic-block-schema.js');

module.exports = {
  id: 'basic-block',
  templates: [
    {
      name: '@components/basic-block.twig',
      schema,
    },
  ],
};
