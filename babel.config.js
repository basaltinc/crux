module.exports = api => {
  api.cache(false);
  return {
    extends: '@basalt/bedrock-babel-config',
  };
};
