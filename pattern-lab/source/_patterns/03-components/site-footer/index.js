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
  title: schema.title,
  type: 'component',
  template: '@components/_site-footer.twig',
  schema,
};

module.exports = {
  meta,
};
