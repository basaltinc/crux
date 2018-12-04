const twigRenderer = require('./twig-renderer');

/** @type {BedrockConfig} */
const config = {
  patterns: ['./assets/patterns/*'],
  newPatternDir: './assets/patterns/',
  dist: './dist',
  public: './public',
  data: './data',
  assets: './assets',
  css: ['./public/assets/simple.css'],
  // js: ['./public/assets/script.js'],
  // site: {
  //   // title: 'A Super Simple Site',
  //   // subtitle: 'A Simple Example of a Design System',
  //   // slogan: "Wasn't that simple?",
  //   version: '1.2.3',
  // },
  templates: [
    {
      test: theTemplatePath => theTemplatePath.endsWith('.twig'),
      render: (template, data = {}) => twigRenderer.render(template, data),
      renderString: (templateString, data = {}) =>
        twigRenderer.renderString(templateString, data),
    },
  ],
  designTokens: './design-tokens/tokens.yml',
};

module.exports = config;
