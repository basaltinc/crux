function presets(useESModules) {
  return [
    [
      '@babel/preset-env',
      {
        modules: useESModules ? false : 'commonjs',
        targets: {
          browsers: ['last 2 versions', '> 5%', 'not ie <= 11'],
        },
      },
    ],
    '@babel/preset-react',
  ];
}

module.exports = (useESModules = false) => ({
  presets: presets(useESModules),
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'transform-react-remove-prop-types',
    'babel-plugin-styled-components',
    [
      // http://babeljs.io/docs/en/babel-plugin-transform-runtime
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules,
      },
    ],
  ],
});
