const HtmlRenderer = require('@knapsack/renderer-html');
const TwigRenderer = require('@knapsack/renderer-twig');
const designTokens = require('./public/build/tokens/knapsack-design-tokens');
const twigNamespacesConfig = require('./twig-namespaces');
const { version } = require('./package');

/** @type {knapsackUserConfig} */
const config = {
  patterns: ['./_patterns/03-components/**/*'],
  newPatternDir: './_patterns/03-components/',
  designTokens: {
    createCodeSnippet: token => `$${token.name}`,
    data: designTokens,
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
  templateRenderers: [
    new HtmlRenderer(),
    // docs on config that can be passed in: https://github.com/basaltinc/twig-renderer/blob/master/config.schema.json
    new TwigRenderer({
      src: twigNamespacesConfig,
      //   alterTwigEnv: [
      //     {
      //       file: './src/alter-twig.php',
      //       functions: ['addCustomExtension'],
      //     },
      //   ],
    }),
  ],
  changelog: './CHANGELOG.md',
  version: `v${version}`,
};

module.exports = config;
