module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Site Footer',
  description: 'A global site footer',
  properties: {
    menu_items: {
      title: 'Menu Items',
      type: 'array',
      description: 'Items to include in the footer nav menu',
      items: {
        type: 'object',
        title: 'Menu Item',
        description: 'Menu Item data',
        properties: {
          url: {
            title: 'Url',
            type: 'string',
            description: 'Url or href for the menu item',
          },
          active: {
            title: 'Active',
            type: 'boolean',
            description: 'Whether the current link is active',
          },
          text: {
            title: 'Text',
            type: 'string',
            description: 'Text of the menu item',
          },
        },
      },
    },
  },
  examples: [
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
  ],
};
