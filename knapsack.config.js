const HtmlRenderer = require('@knapsack/renderer-html');
const TwigRenderer = require('@knapsack/renderer-twig');
const { theoKnapsackFormat } = require('@basalt/knapsack');
const theo = require('theo');
const twigNamespacesConfig = require('./twig-namespaces');
const { version } = require('./package');

const format = theoKnapsackFormat(theo);

/** @type {KnapsackConfig} */
const config = {
  patterns: ['./_patterns/03-components/**/*'],
  newPatternDir: './_patterns/03-components/',
  designTokens: {
    createCodeSnippet: token => `$${token.name}`,
    data: theo.convertSync({
      transform: {
        type: 'web',
        file: './_patterns/00-styleguide/tokens.yml',
      },
      format,
    }),
  },
  dist: './dist',
  public: './public',
  data: './data',
  assetSets: [
    {
      id: 'default',
      title: 'Default',
      assets: [
        { src: './public/build/crux.css' },
        { src: './public/knapsack.overrides.css' },
        { src: './public/build/crux.js' },
      ],
    },
  ],
  // docsDir: './docs',
  templateRenderers: [
    new HtmlRenderer(),
    new TwigRenderer({
      src: twigNamespacesConfig,
      // alterTwigEnv: [
      //   {
      //     file: './alter-twig.php',
      //     functions: ['addCustomExtension'],
      //   },
      // ],
    }),
  ],
  version: `v${version}`,
};

module.exports = config;
