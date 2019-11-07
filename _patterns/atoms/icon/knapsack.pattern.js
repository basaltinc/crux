const schema = require('./icon-schema.js');

module.exports = {
  id: 'icon',
  templates: [
    {
      alias: '@atoms/icon/icon.twig',
      path: './icon.twig',
      id: 'iconTemplate',
      title: 'Icon',
      schema,
      demoDatas: [
        {
          symbol: 'copy'
        }
      ],
    },
  ],
};
