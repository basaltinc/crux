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

const debug = true;
const showSizeDetails = false;
const showFilesize = true;

const configs = [
  {
    dir: './components/api-demo',
    entry: 'src/api-demo.jsx',
  },
  {
    dir: './components/atoms',
    entry: 'src/atoms.jsx',
  },
  {
    dir: './components/color-contrast-block',
    entry: 'src/color-contrast-block.story.jsx',
  },
  {
    dir: './components/color-swatch',
    entry: 'src/color-swatch.jsx',
  },
  {
    dir: './components/dos-and-donts',
    entry: 'src/dos-and-donts.jsx',
  },
  {
    dir: './components/error-catcher',
    entry: 'src/error-catcher.jsx',
  },
  {
    dir: './components/schema-form',
    entry: 'src/schema-form.jsx',
  },
  {
    dir: './components/schema-table',
    entry: 'src/schema-table.jsx',
  },
  {
    dir: './components/spinner',
    entry: 'src/spinner.jsx',
  },
  {
    dir: './components/tabbed-panel',
    entry: 'src/tabbed-panel.jsx',
  },
  {
    dir: './components/variation-demo',
    entry: 'src/variation-demo.jsx',
  },
  {
    dir: './packages/utils',
    entry: 'src/index.js',
  },
  // {
  //   dir: './packages/core',
  //   entry: 'src/index.js',
  //   external: [
  //     'ajv',
  //     'ajv-keywords',
  //     'lodash.foreach',
  //     'lodash.merge',
  //   ],
  // },
].map(({ dir, entry, only = [], external = [] }) => {
  const packageJsonPath = resolve(dir, 'package.json');
  const pkg = require(packageJsonPath); // eslint-disable-line
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

  const externals = [...Object.keys(pkg.dependencies), ...external];

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
    input: join(dir, entry),
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
        extends: join(__dirname, './.babelrc'),
      }),
      showFilesize ? filesize() : null,
      clear({
        targets: [distDir !== resolve(dir) ? distDir : null].filter(x => x),
      }),
      showSizeDetails ? analyzer() : null,
    ].filter(x => x),
    external: externals,
    watch: {
      clearScreen: false,
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
