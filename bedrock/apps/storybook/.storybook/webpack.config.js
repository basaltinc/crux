const util = require('util'); // eslint-disable-line
const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules = defaultConfig.module.rules.map((rule) => {
    if (rule.loader && rule.loader.includes('babel-loader')) {
      // Fixes the inability for babel-loader to process the components that are part of this monorepo
      rule.include.push(path.join(__dirname, '../../../'));
      return rule;
    }

    return rule;
  });

  defaultConfig.resolve.mainFields = ['src', 'module', 'main'];
  // console.log(util.inspect(defaultConfig, false, null));
  return defaultConfig;
};
