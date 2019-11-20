const schema = require('./content-divider-schema.js');

module.exports = {
  id: 'contentDivider',
  templates: [
    {
      alias: '@atoms/content-divider/content-divider.twig',
      path: './content-divider.twig',
      id: 'twig',
      title: 'Twig',
      schema,
      demoDatas: [{}],
    },
  ],
};
