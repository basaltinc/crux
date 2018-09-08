const TwigRenderer = require('@basalt/twig-renderer');
const { join } = require('path');

const isProd = process.env.NODE_ENV === 'production';

const twigRenderer = new TwigRenderer({
  relativeFrom: join(__dirname, '..'),
  src: {
    roots: ['_patterns'],
    namespaces: [
      {
        id: 'svgs',
        paths: ['images/svgs'],
      },
      {
        id: 'styleguide',
        recursive: true,
        paths: ['_patterns/00-styleguide'],
      },
      {
        id: 'layouts',
        recursive: true,
        paths: ['_patterns/02-layouts'],
      },
      {
        id: 'components',
        recursive: true,
        paths: ['_patterns/03-components'],
      },
      {
        id: 'templates',
        recursive: true,
        paths: ['_patterns/04-templates'],
      },
    ],
  },
  alterTwigEnv: [
    {
      file: join(__dirname, 'twig-setup.php'),
      functions: ['setupTwig'],
    },
  ],
  // when `true`, all Twig templates are cached and don't show new changes
  keepAlive: isProd,
});

module.exports = twigRenderer;
