const schema = require('./button-schema.js');

module.exports = {
  id: 'button',
  templates: [
    {
      alias: '@atoms/button/button.twig',
      path: './button.twig',
      id: 'twig',
      title: 'Twig',
      schema,
      demoDatas: [
        {
          text: 'Standard Button',
        },
        {
          text: 'Primary Button',
          is_primary: true,
        }
      ],
    },
  ],
};
