const browsersList = require('./browserslist');

module.exports = (useEsModules = false) => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: useEsModules ? false : 'commonjs',
        targets: {
          browsers: browsersList,
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'transform-react-remove-prop-types',
    'babel-plugin-styled-components',
  ],
});
