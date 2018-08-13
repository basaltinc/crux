const schema = require('./logo-schema.json');

schema.examples = [
  {
    imgSrc: '/assets/images/logos/main.png',
    url: 'http://www.basalt.io',
    size: 'jumbo',
    greyscale: false,
  },
];

const meta = {
  id: 'logo',
  title: 'Logo',
  type: 'component',
  templates: [
    {
      name: '@components/_logo.twig',
      selector: '.logo',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
