const schema = require('./media-card-schema.js');

module.exports = {
  id: 'mediaCard',
  templates: [
    {
      alias: '@molecules/media-card/media-card.twig',
      path: './media-card.twig',
      id: 'mediaCardTemplate',
      title: 'Media Card',
      schema,
      demoDatas: [
        {
          heading: 'About the Host',
          bodyCopy:
            'Chris Strahl is the CEO and one of the founders of Basalt. Chris has a background as a coder, but now focuses more on the business side. He has managed designers and design teams, both in agencies and in startup environments.',
          href: '#',
          imageUrl: 'https://placeimg.com/640/640/nature',
          imageIsAvatar: true,
          mediaAlignment: 'right',
        },
      ],
    },
  ],
};
