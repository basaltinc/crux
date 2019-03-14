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
          img: 'https://www.fillmurray.com/200/200',
        },
      ],
    },
  ],
};
