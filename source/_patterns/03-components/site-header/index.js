const schema = require('./site-header-schema');

const meta = {
  id: 'site-header',
  title: 'Site Header',
  type: 'component',
  description: 'A global site header',
  templates: [
    {
      name: '@components/_site-header.twig',
      selector: '.site-header',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
