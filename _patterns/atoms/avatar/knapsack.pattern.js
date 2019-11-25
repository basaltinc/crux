const schema = require('./avatar-schema.js');

module.exports = {
  id: 'avatar',
  templates: [
    {
      alias: '@atoms/avatar/avatar.twig',
      path: './avatar.twig',
      id: 'avatarTemplate',
      title: 'Avatar',
      schema,
      demoDatas: [
        {
          imageUrl: 'https://basalt.io/user/pages/08.Authors/joe-karasek/joe.png',
          altText: 'Avatar Alt Text',
          hasShadow: true,
          size: 'l',
        },
        {
          imageUrl: 'https://basalt.io/user/pages/08.Authors/joe-karasek/joe.png',
          altText: 'Avatar Alt Text #2',
          hasShadow: false,
          size: 's',
        },
      ],
    },
  ],
};
