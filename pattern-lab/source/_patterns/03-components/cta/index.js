const schema = require('./cta-schema.json');

schema.examples = [
  {
    text:
      'We build consistent, scalable, and maintainable solutions to power your digital strategy.',
  },
];

const meta = {
  id: 'cta',
  title: 'CTA',
  type: 'component',
  templates: [
    {
      name: '@components/_cta.twig',
      selector: '.cta',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
