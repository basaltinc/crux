const schema = require('./cta-schema.js');

const meta = {
  id: 'cta',
  title: 'CTA',
  type: 'component',
  description:
    "This 'Call To Action' is designed to specifically encourage the user to contact Basalt.",
  uses: ['inSlice'],
  templates: [
    {
      name: '@components/_cta.twig',
      selector: '.cta',
      schema,
    },
  ],
  demoSize: 'l',
};

module.exports = {
  meta,
};
