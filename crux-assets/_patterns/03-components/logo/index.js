const schema = require('./logo-schema');

const meta = {
  id: 'logo',
  title: 'Logo',
  type: 'component',
  description: 'Logo',
  uses: ['inComponent'],
  templates: [
    {
      name: '@components/_logo.twig',
      selector: '.logo',
      schema,
    },
  ],
  demoSize: 'm',
};

module.exports = {
  meta,
};
