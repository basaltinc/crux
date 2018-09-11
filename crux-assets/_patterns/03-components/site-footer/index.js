const schema = require('./site-footer-schema');

const uiSchema = {};

const meta = {
  id: 'site-footer',
  title: 'Site Footer',
  type: 'component',
  description: 'A global site footer',
  uses: ['inSlice'],
  templates: [
    {
      name: '@components/_site-footer.twig',
      selector: '.site-footer',
      schema,
      uiSchema,
    },
  ],
  demoSize: 'full',
};

module.exports = {
  meta,
};
