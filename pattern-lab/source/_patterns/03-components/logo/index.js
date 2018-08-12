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
  title: schema.title,
  type: 'component',
  template: '@components/_logo.twig',
  schema,
};

module.exports = {
  meta,
};
