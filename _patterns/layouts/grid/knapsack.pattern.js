const schema = require('./grid.schema');

module.exports = {
  id: 'grid',
  templates: [
    {
      alias: '@layouts/grid/grid.twig',
      path: './grid.twig',
      id: 'default',
      title: 'Default',
      schema,
      demoDatas: [
        {
          items: [
            '<div class="demo-box"></div>',
            '<div class="demo-box"></div>',
            '<div class="demo-box"></div>',
            '<div class="demo-box"></div>',
            '<div class="demo-box"></div>',
            '<div class="demo-box"></div>',
          ],
          types: {
            small: '50:50',
            medium: '33:33:33',
            large: '25:25:25:25',
          },
        },
        {
          items: [
            '<div class="demo-box"></div>',
            '<div class="demo-box"></div>',
            '<div class="demo-box"></div>',
            '<div class="demo-box"></div>',
            '<div class="demo-box"></div>',
            '<div class="demo-box"></div>',
          ],
          types: {
            small: '50:50',
            medium: '66:33',
            large: '66:33',
          },
        },
      ],
    },
    {
      alias: '@layouts/grid/nested-grid.twig',
      path: './nested-grid.twig',
      id: 'nested-grid',
      title: 'Nested Grid example',
      docPath: './nested-grid.md',
    },
  ],
};
