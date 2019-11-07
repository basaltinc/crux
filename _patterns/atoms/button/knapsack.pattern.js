const schema = require('./button-schema.js');

const {
  text,
  is_primary,
  is_block,
  type,
  link_url,
  link_alt,
  link_openNewTab,
  extraClasses
} = schema.properties;

const shared = {
  text,
  is_primary,
  extraClasses
};

module.exports = {
  id: 'button',
  templates: [
    {
      alias: '@atoms/button/button.twig',
      path: './button.twig',
      id: 'button',
      title: 'Button',
      schema: {
        ...schema,
        properties: {
          ...shared,
          is_block,
          type,
        }
      },
      demoDatas: [
        {
          text: 'Standard Button',
        },
        {
          text: 'Primary Button',
          is_primary: true,
        }
      ],
    },
    {
      alias: '@atoms/button/link.twig',
      path: './link.twig',
      id: 'link',
      title: 'Link',
      schema: {
        ...schema,
        properties: {
          ...shared,
          link_alt,
          link_url,
          link_openNewTab,
        },
      },
      demoDatas: [
        {
          text: 'Link Button',
          link_url: 'https://basalt.io/',
          link_alt: 'Website for Basalt',
          link_openNewTab: true
        },
        {
          text: 'Primary Link Button',
          is_primary: true,
          link_url: 'https://basalt.io/',
          link_alt: 'Website for Basalt',
          link_openNewTab: true
        }
      ],
    },
  ],
};
