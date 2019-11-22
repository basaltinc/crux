const schema = require('./hero-schema.js');

module.exports = {
  id: 'hero',
  templates: [
    {
      alias: '@organisms/hero/hero.twig',
      path: './hero.twig',
      id: 'hero',
      title: 'Hero',
      schema,
      demoDatas: [
        {
          imageUrl: 'https://basalt.io/images/brand-stock/basalt-hero-white-tiles.jpg?resize=2000&quality=80',
          anchoredBlurbs: [
            {
              header: 'Header Text',
              body: 'Some awesome body text to go along with this amazing header.',
              hasBackground: true,
              maxWidth: 360
            }
          ],
        },
      ],
    },
  ],
};
