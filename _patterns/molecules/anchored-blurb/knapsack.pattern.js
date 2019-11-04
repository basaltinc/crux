const schema = require('./anchored-blurb-schema.js');

module.exports = {
  id: 'anchoredBlurb',
  templates: [
    {
      alias: '@molecules/anchored-blurb/anchored-blurb.twig',
      path: './anchored-blurb.twig',
      id: 'anchoredBlurb',
      title: 'Anchored Blurb',
      schema,
      demoDatas: [
        {
          header: 'Header Text',
          headingLevel: 2,
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          has_background: true,
          ctas: [
            {
              text: 'CTA',
              is_primary: true,
              link_url: 'https://basalt.io/',
              link_alt: 'Website for Basalt',
              link_openNewTab: true
            }
          ],
        },
        {
          header: 'An example with only header text.'
        }
      ],
    },
  ],
};
