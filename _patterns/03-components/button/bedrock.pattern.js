const schema = require('./button-schema.js');

module.exports = {
  id: 'button',
  templates: [
    {
      alias: '@components/button.twig',
      path: './button.twig',
      id: 'twig',
      title: 'Twig',
      schema,
    },
  ],
};
