const path = require('path');
const BedrockSite = require('@basalt/bedrock-site');
const { version } = require('@basalt/crux-assets/package.json');

const cruxSite = new BedrockSite({
  dist: path.join(__dirname, 'dist'),
  public: path.join(__dirname, 'public'),
  // everything in `settings` MUST be JSON serializable
  settings: {
    isDebug: true,
    isDevMode: process.env.DEV_MODE === 'yes',
    isProd: process.env.NODE_ENV === 'production',
    websocketsPort: 5042,
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
    urls: {
      apiUrlBase: 'http://localhost:3042/api',
      cssUrls: ['http://localhost:3042/assets/crux.css'],
      jsUrls: ['http://localhost:3042/assets/crux.js'],
    },
  },
});

const { webpackConfig } = cruxSite;

module.exports = {
  webpackConfig,
};
