const schema = require('./avatar-schema.js');

module.exports = {
  id: 'avatar',
  templates: [
    {
      alias: '@components/avatar.twig',
      path: './avatar.twig',
      id: 'twig',
      title: 'Twig',
      schema,
      demoDatas: [
        {
          size: 'xl',
          img: '/images/demos/avatar-example.jpg',
        },
      ],
    },
  ],
};
