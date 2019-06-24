module.exports = {
  $schema: 'http://json-schema.org/draft-07/schema',
  type: 'object',
  title: 'Site Header',
  description: 'A global site header',
  properties: {
    menu_items: {
      title: 'Menu Items',
      type: 'array',
      description: 'Items to include in the header nav menu',
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
          sub_menu: {
            title: 'Sub-Menu Items',
            type: 'array',
            description: 'Items to include in drop down nav menu',
            items: {
              type: 'object',
              title: 'Sub-Menu Item',
              description: 'Sub-Menu Item data',
              properties: {
                url: {
                  title: 'Url',
                  type: 'string',
                  description: 'Url or href for the menu item',
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
          sub_menu: [
            {
              url: 'https://basalt.io/work-at-basalt',
              text: 'Careers With Basalt',
            },
            {
              url: 'https://design.basalt.io/',
              text: 'Crux',
            },
          ],
        },
        {
          url: 'http://basalt.io/what-we-do',
          text: 'What We Do',
          sub_menu: [
            {
              url: 'http://basalt.io/what-we-do',
              text: 'Our Work',
            },
            {
              url: 'http://basalt.io/what-we-do',
              text: 'Resources',
            },
          ],
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
          sub_menu: [
            {
              text: 'Sub Menu Item One',
            },
          ],
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
