const schema = require('./social-schema.json');

const meta = {
  id: 'social',
  title: 'Social',
  type: 'component',
  templates: [
    {
      name: '@components/_social.twig',
      selector: '.social',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
