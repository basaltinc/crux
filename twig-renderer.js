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
    ],
  },
};
const twigRenderer = new TwigRenderer(config);

module.exports = twigRenderer;
