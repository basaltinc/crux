const path = require('path');
const BedrockSite = require('@basalt/bedrock-site');

const cruxSite = new BedrockSite({
  dist: path.join(__dirname, 'dist'),
  public: path.join(__dirname, 'public'),
});

const { webpackConfig } = cruxSite;

module.exports = {
  webpackConfig,
};
