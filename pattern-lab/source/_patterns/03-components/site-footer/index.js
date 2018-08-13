const schema = require('./site-footer-schema.json');

schema.examples = [
  {
    menu_items: [
      {
        url: 'http://basalt.io/who-we-are',
        text: 'Who We Are',
        active: true,
      },
      {
        url: 'http://basalt.io/what-we-do',
        text: 'What We Do',
      },
      {
        url: 'http://basalt.io/what-are-design-systems',
        text: 'What are Design Systems?',
      },
      {
        url: 'http://basalt.io/journal',
        text: 'Journal',
      },
      {
        url: 'http://basalt.io/contact',
        text: 'Contact Us',
      },
    ],
  },
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
