import { join, resolve, dirname } from 'path';
import { plugin as analyzer } from 'rollup-plugin-analyzer';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
// import uglify from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import clear from 'rollup-plugin-clear';
import string from 'rollup-plugin-string';
import url from 'rollup-plugin-url';

const debug = false;
const showSizeDetails = false;
const showFilesize = false;
const clearDist = false;

const configs = [
  {
    dir: './components/api-demo',
  },
  {
    dir: './components/atoms',
  },
  {
    dir: './components/color-contrast-block',
  },
  {
    dir: './components/color-swatch',
  },
  {
    dir: './components/dos-and-donts',
  },
  {
    dir: './components/error-catcher',
  },
  {
    dir: './components/schema-form',
  },
  {
    dir: './components/schema-table',
  },
  {
    dir: './components/spinner',
  },
  {
    dir: './components/tabbed-panel',
  },
  {
    dir: './components/variation-demo',
  },
  {
    dir: './packages/utils',
  },
  {
    dir: './packages/schema-utils',
  },
  {
    dir: './packages/core',
  },
  // {
  //   dir: './packages/core',
  //   external: [
  //     'ajv',
  //     'ajv-keywords',
  //     'lodash.foreach',
  //     'lodash.merge',
  //   ],
  // },
].map(({ dir, only = [], external = [] }) => {
  const packageJsonPath = resolve(dir, 'package.json');
  const pkg = require(packageJsonPath); // eslint-disable-line
  const { dependencies = {} } = pkg;
  const distDir = dirname(resolve(dir, pkg.main));

  // Modules not matching any entry will be marked as external
  // const onlyInclude = [
  //   /^\./,
  //   /cambia/,
  //   ...only,
  //   // ...Object.keys(pkg.dependencies || {}).filter(
  //   //   x => !x.startsWith('@cambia'),
  //   // ),
  // ].filter(x => x);

  const externals = [
    ...Object.keys(dependencies),
    ...external,
    'styled-components',
  ];

  // const externals = [
  //   ...external,
  //   'react',
  //   // 'react-dom',
  //   'prop-types',
  //   // pkg.name !== '@cambia/core' ? '@cambia/core' : '',
  // ].filter(x => x);

  if (debug) {
    console.log(`Rollup config for ${pkg.name}: `);
    console.log({ only, externals });
    console.log();
  }

  return {
    input: join(dir, pkg.src),
    output: [
      {
        file: join(dir, pkg.main),
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module ? join(dir, pkg.module) : null,
        format: 'es',
        sourcemap: true,
      },
    ].filter(x => x.file),
    // perf: true,
    plugins: [
      // https://www.npmjs.com/package/rollup-plugin-node-resolve
      nodeResolve({
        extensions: ['.mjs', '.jsx', '.js', '.json'],
        // only: onlyInclude,
        preferBuiltins: true,
        customResolveOptions: {
          moduleDirectory: 'node_modules',
        },
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      // https://github.com/rollup/rollup-plugin-commonjs
      commonjs({
        namedExports: {
          // left-hand side can be an absolute path, a path
          // relative to the current directory, or the name
          // of a module in node_modules
          'react-is': ['isValidElementType'],
          'react-copy-to-clipboard': ['CopyToClipboard'],
        },
      }),
      peerDepsExternal({
        packageJsonPath,
      }),
      string({
        include: '**/*.md',
      }),
      json({
        preferConst: true,
        indent: '  ',
      }),
      postcss(),
      url({
        limit: 20 * 1024,
      }),
      // https://github.com/rollup/rollup-plugin-babel
      babel({
        // externalHelpers: false, // whether to bundle in the Babel helpers
        exclude: 'node_modules/**',
        // plugins: ['external-helpers'],
        extends: '@basalt/bedrock-babel-config/es',
      }),
      showFilesize ? filesize() : null,
      clearDist
        ? clear({
            targets: [distDir !== resolve(dir) ? distDir : null].filter(x => x),
          })
        : null,
      showSizeDetails ? analyzer() : null,
    ].filter(x => x),
    external: externals,
    watch: {
      clearScreen: false,
      chokidar: {
        ignoreInitial: true,
      },
    },
  };
});

// if (process.env.NODE_ENV === 'production') {
//   config.plugins.push(
//     uglify({
//       compress: {
//         dead_code: true,
//         warnings: false,
//       },
//     }),
//   );
// }

export default configs;
