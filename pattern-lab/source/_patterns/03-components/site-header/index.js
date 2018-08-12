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
  title: schema.title,
  type: 'component',
  template: '@components/_site-header.twig',
  schema,
};

module.exports = {
  meta,
};
