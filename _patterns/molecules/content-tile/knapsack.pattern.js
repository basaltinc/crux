const schema = require('./content-tile-schema.js');

module.exports = {
  id: 'contentTile',
  templates: [
    {
      alias: '@molecules/content-tile/content-tile.twig',
      path: './content-tile.twig',
      id: 'contentTileTemplate',
      title: 'Content Tile',
      schema,
      demoDatas: [
        {
          metaInfo: 'Episode 12',
          metaDate: 'Nov 5, 2019',
          header: 'Design at scale with Mary Wu',
          headingLevel: 3,
          thumbnailImgUrl: 'https://i.ibb.co/t3Mh4xj/mary-wu.png',
          snippet: 'The most effective design systems are the result of collaboration between coders, designers, managers, and end users. Working with such a diverse group of people is deeply rewarding.',
          link: 'https://basalt.io/',
        }
      ],
    },
  ],
};
