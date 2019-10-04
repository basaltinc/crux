const schema = require('./bio-block-schema.js');

module.exports = {
  id: 'bio-block',
  templates: [
    {
      alias: '@components/bio-block.twig',
      path: './bio-block.twig',
      id: 'twig',
      title: 'Twig',
      schema,
      demoDatas: [
        {
          name: 'Chris Strahl',
          role: 'CEO',
          img: '/images/demos/chrisstrahl.jpg',
          twitter: 'chrisstrahl',
        },
      ],
    },
  ],
};
