const schema = require('./social-schema');

const meta = {
  id: 'social',
  title: 'Social',
  type: 'component',
  description: 'Collection of Social Media Icons',
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
