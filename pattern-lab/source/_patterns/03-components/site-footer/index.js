const schema = require('./site-footer-schema.json');

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
  id: 'site-footer',
  title: 'Site Footer',
  type: 'component',
  templates: [
    {
      name: '@components/_site-footer.twig',
      selector: '.site-footer',
      schema,
    },
  ],
};

module.exports = {
  meta,
};
