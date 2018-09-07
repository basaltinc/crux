const schema = require('./site-header-schema');

const meta = {
  id: 'site-header',
  title: 'Site Header',
  type: 'component',
  description: 'A global site header',
  uses: ['inSlice'],
  templates: [
    {
      name: '@components/_site-header.twig',
      selector: '.site-header',
      schema,
    },
  ],
  demoSize: 'full',
};

module.exports = {
  meta,
};
