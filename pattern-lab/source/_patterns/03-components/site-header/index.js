const schema = require('./site-header-schema.json');

schema.examples = [
  {
    menu_items: [
      {
        url: '#',
        text: 'Menu Item One',
        active: true,
      },
      {
        url: '#',
        text: 'Menu Item Two',
      },
      {
        url: '#',
        text: 'Menu Item Three',
      },
      {
        url: '#',
        text: 'Menu Item Four',
      },
    ],
  },
];

const meta = {
  id: 'site-header',
  title: 'Site Header',
  type: 'component',
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
