import TwigRenderer from '@basalt/twig-renderer';
import { join } from 'path';
import { isDevMode } from './config';

const twigRenderer = new TwigRenderer({
  relativeFrom: join(__dirname, '..'),
  src: {
    roots: ['source'],
    namespaces: [
      {
        id: 'svgs',
        paths: ['site/public/assets/images/svgs'],
      },
      {
        id: 'styleguide',
        recursive: true,
        paths: ['source/_patterns/00-styleguide'],
      },
      {
        id: 'layouts',
        recursive: true,
        paths: ['source/_patterns/02-layouts'],
      },
      {
        id: 'components',
        recursive: true,
        paths: ['source/_patterns/03-components'],
      },
      {
        id: 'templates',
        recursive: true,
        paths: ['source/_patterns/04-templates'],
      },
    ],
  },
  alterTwigEnv: [
    {
      file: join(__dirname, 'twig.php'),
      functions: ['setupTwig'],
    },
  ],
  keepAlive: !isDevMode, // when `true`, all Twig templates are cached and don't show new changes
});

module.exports = twigRenderer;
