function presets(useEsModules = true) {
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

// https://babeljs.io/docs/en/config-files#config-function-api
module.exports = api => {
  api.cache(false);
  return {
    presets: presets(),
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      'transform-react-remove-prop-types',
      'babel-plugin-styled-components',
    ],
    env: {
      cli: {
        presets: presets(false),
      },
      test: {
        presets: presets(false),
      },
    },
    // overrides: [
    //   {
    //     include: [
    //       'node_modules/@basalt/**',
    //       '**/node_modules/@basalt/**',
    //       '**/source/**',
    //       'source/**',
    //       '/Users/Evan/dev/basalt/our-site/our-design-system/source/index.js',
    //     ],
    //     presets: [
    //       [
    //         '@babel/preset-env',
    //         {
    //           modules: useEsModules ? false : 'commonjs',
    //           targets: {
    //             browsers: ['last 2 versions', '> 5%', 'not ie <= 11'],
    //           },
    //         },
    //       ],
    //       '@babel/preset-react',
    //     ],
    //     plugins: [
    //       '@babel/plugin-syntax-dynamic-import',
    //       'transform-react-remove-prop-types',
    //       'babel-plugin-styled-components',
    //     ],
    //   }
    // ]
  };
};
