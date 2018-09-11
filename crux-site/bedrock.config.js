const path = require('path');
const BedrockSite = require('@basalt/bedrock-site');
const { version } = require('@basalt/crux-assets/package.json');

const cruxSite = new BedrockSite({
  dist: path.join(__dirname, 'dist'),
  public: path.join(__dirname, 'public'),
  // everything in `settings` MUST be JSON serializable
  settings: {
    site: {
      title: 'Crux',
      subtitle: 'Design System by Basalt',
      slogan: 'Let Us Handle The Hard Part',
      version,
    },
    parentBrand: {
      title: 'Basalt',
      logo: '/assets/images/logos/white-grey.svg',
      homepage: 'http://www.basalt.io',
    },
  },
});

const { webpackConfig } = cruxSite;

module.exports = {
  webpackConfig,
};
