const TwigRenderer = require('@basalt/bedrock-renderer-twig');

/** @type {BedrockConfig} */
const config = {
  patterns: ['./_patterns/03-components/**/*'],
  newPatternDir: './_patterns/03-components/',
  designTokens: './_patterns/00-styleguide/tokens.yml',
  dist: './dist',
  public: './public',
  data: './data',
  css: ['./public/build/crux.css', './public/bedrock.overrides.css'],
  js: ['./public/build/crux.js'],
  docsDir: './docs',
  templates: [
    new TwigRenderer({
      src: {
        roots: ['./_patterns/03-components/'],
        namespaces: [
          {
            id: 'components',
            recursive: true,
            paths: ['./_patterns/03-components/'],
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
      keepAlive: process.env.NODE_ENV === 'production', // makes re-rendering of templates faster
    }),
  ],
};

module.exports = config;
