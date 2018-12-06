const twigRenderer = require('./twig-renderer');

/** @type {BedrockConfig} */
const config = {
  patterns: ['./_patterns/**/*'],
  newPatternDir: './_patterns/03-components/',
  designTokens: './_patterns/00-styleguide/tokens.yml',
  dist: './dist',
  public: './public',
  data: './data',
  css: ['./public/build/crux.css', './public/bedrock.overrides.css'],
  js: ['./public/build/crux.js'],
  templates: [
    {
      test: theTemplatePath => theTemplatePath.endsWith('.twig'),
      render: (template, data = {}) => twigRenderer.render(template, data),
      renderString: (templateString, data = {}) =>
        twigRenderer.renderString(templateString, data),
    },
  ],
};

module.exports = config;
