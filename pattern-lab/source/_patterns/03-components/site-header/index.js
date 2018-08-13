const schema = require('./site-header-schema.json');

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
