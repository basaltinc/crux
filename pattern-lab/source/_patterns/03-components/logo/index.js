const schema = require('./logo-schema.json');

schema.examples = [
  {
    imgSrc: 'http://files.basalt.io/logos/main--500.png', // @todo use local copy
    url: 'http://www.basalt.io',
    size: 'large',
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
