const TwigRenderer = require('@basalt/twig-renderer');
const { join } = require('path');

// by calling `new`, it'll build the config file we need there.
// then, when `npm run serve:twig` is ran, that server has
const twigRenderer = new TwigRenderer({
  relativeFrom: join(__dirname, '..'),
  src: {
    roots: ['pattern-lab/source'],
    namespaces: [
      {
        id: 'svgs',
        paths: ['images/svgs'],
      },
      {
        id: 'utils',
        paths: ['pattern-lab/source/_utils'],
      },
      {
        id: 'styleguide',
        recursive: true,
        paths: ['pattern-lab/source/_patterns/00-styleguide'],
      },
      {
        id: 'layouts',
        recursive: true,
        paths: ['pattern-lab/source/_patterns/02-layouts'],
      },
      {
        id: 'components',
        recursive: true,
        paths: ['pattern-lab/source/_patterns/03-components'],
      },
      {
        id: 'templates',
        recursive: true,
        paths: ['pattern-lab/source/_patterns/04-templates'],
      },
    ],
  },
  alterTwigEnv: [{
    file: join(__dirname, 'twig.php'),
    functions: ['setupTwig'],
  }],
});

// eslint-disable-next-line
console.log('Twig Renderer config made and ready to use.');

module.exports = twigRenderer;
