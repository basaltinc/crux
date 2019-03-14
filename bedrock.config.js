const HtmlRenderer = require('@basalt/bedrock-renderer-html');
const TwigRenderer = require('@basalt/bedrock-renderer-twig');
const { theoBedrockFormat } = require('@basalt/bedrock');
const theo = require('theo');
const twigNamespacesConfig = require('./twig-namespaces');
const { version } = require('./package');

const format = theoBedrockFormat(theo);

/** @type {BedrockConfig} */
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
        { src: './public/bedrock.overrides.css' },
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
