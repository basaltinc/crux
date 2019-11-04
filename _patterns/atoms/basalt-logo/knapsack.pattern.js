const schema = require('./basalt-logo-schema.js');

module.exports = {
  id: 'basaltLogo',
  templates: [
    {
      alias: '@atoms/basalt-logo/basalt-logo.twig',
      path: './basalt-logo.twig',
      id: 'twig',
      title: 'Twig',
      schema,
      demoDatas: [
        {
          is_light: false,
        },
        {
          is_light: true,
        }
      ],
    },
  ],
};
