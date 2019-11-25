const schema = require('./bio-block-schema.js');

module.exports = {
  id: 'bioBlock',
  templates: [
    {
      alias: '@molecules/bio-block/bio-block.twig',
      path: './bio-block.twig',
      id: 'bioBlockTemplate',
      title: 'Bio Block',
      schema,
      demoDatas: [
        {
          imageUrl:
            'https://basalt.io/images/a/3/3/f/3/a33f3ee50555946da3bb9b4ec3c59e73a913216b-nam-1000x1542.png',
          name: 'Nam Ho',
          title: 'EVP Delivery',
          twitter: 'namtheho',
          linkedin: 'namtheho',
        },
      ],
    },
  ],
};
