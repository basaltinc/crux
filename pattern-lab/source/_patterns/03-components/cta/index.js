const schema = require('./cta-schema.json');

schema.examples = [
  {
    text:
      'We build consistent, scalable, and maintainable solutions to power your digital strategy.',
  },
];

const meta = {
  id: 'cta',
  title: schema.title,
  type: 'component',
  template: '@components/_cta.twig',
  schema,
};

module.exports = {
  meta,
};
