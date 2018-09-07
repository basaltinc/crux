const schema = require('./smart-grid.schema');

const meta = {
  id: 'smart-grid',
  title: 'Smart Grid',
  type: 'layout',
  description: 'Flexible grid',
  templates: [
    {
      name: '@layouts/_smart-grid.twig',
      selector: '.smart-grid',
      schema,
    },
  ],
  demoSize: 'full',
};

module.exports = {
  meta,
};
