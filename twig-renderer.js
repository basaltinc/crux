const TwigRenderer = require('@basalt/twig-renderer');

/** @type {TwigRendererConfig} */
const config = {
  src: {
    roots: ['./_patterns'],
    namespaces: [
      {
        id: 'components',
        recursive: true,
        paths: ['./_patterns/'],
      },
      {
        id: 'styleguide',
        recursive: true,
        paths: ['./_patterns/00-styleguide/'],
      },
      {
        id: 'svgs',
        recursive: true,
        paths: ['./images/svgs/'],
      },
    ],
  },
};
const twigRenderer = new TwigRenderer(config);

module.exports = twigRenderer;
