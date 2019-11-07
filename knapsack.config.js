const HtmlRenderer = require('@knapsack/renderer-html');
const TwigRenderer = require('@knapsack/renderer-twig');
const { existsSync } = require('fs');
const { join } = require('path');
const twigNamespacesConfig = require('./twig-namespaces');
const { version } = require('./package');
const { tokens } = require('./paths');

const designTokensPath = join(
  __dirname,
  tokens.dist,
  'knapsack-design-tokens.json',
);
if (!existsSync(designTokensPath)) {
  console.error('Run "npm run build:tokens first"');
  process.exit(1);
}

/** @type {KnapsackConfig} */
const config = {
  patterns: ['./_patterns/03-components/**/*'],
  newPatternDir: './_patterns/03-components/',
  designTokens: {
    createCodeSnippet: token => `$${token.name}`,
    // eslint-disable-next-line
    data: require(designTokensPath),
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
