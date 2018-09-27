const schema = require('./smart-grid.schema');

module.exports = {
  id: 'smart-grid',
  metaFilePath: './meta.json',
  templates: [
    {
      name: '@layouts/_smart-grid.twig',
      selector: '.smart-grid',
      schema,
    },
  ],
};
