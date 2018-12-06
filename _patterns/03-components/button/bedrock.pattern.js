const schema = require('./button-schema.js');

module.exports = {
  id: 'button',
  templates: [
    {
      name: '@components/button.twig',
      schema,
    },
  ],
};
