module.exports = api => {
  api.cache(false);
  return {
    extends: '@knapsack/babel-config',
  };
};
