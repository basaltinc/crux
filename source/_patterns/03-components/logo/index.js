const schema = require('./logo-schema');

const meta = {
  id: 'logo',
  title: 'Logo',
  type: 'component',
  description: 'Logo',
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
