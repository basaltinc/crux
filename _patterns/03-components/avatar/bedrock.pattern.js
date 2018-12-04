const schema = require('./button.schema');

module.exports = {
  id: 'button',
  templates: [
    {
      name: '@components/button.twig',
      schema,
    },
  ],
};
