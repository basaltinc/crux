function presets(useEsModules) {
  return [
    [
      '@babel/preset-env',
      {
        modules: useEsModules ? false : 'commonjs',
        targets: {
          browsers: ['last 2 versions', '> 5%', 'not ie <= 11'],
        },
      },
    ],
    '@babel/preset-react',
  ];
}

module.exports = (useEsModules = false) => ({
  presets: presets(useEsModules),
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'transform-react-remove-prop-types',
    'babel-plugin-styled-components',
  ],
});
