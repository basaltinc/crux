const webpack = require('webpack');
const Stylish = require('webpack-stylish');
const Visualizer = require('webpack-visualizer-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlTemplate = require('html-webpack-template');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

/**
 * @private
 * @param {Object} config - @todo document
 * @return {Object} - WebPack config
 */
function createWebPackConfig(config) {
  const webpackConfig = {
    entry: {
      main: path.resolve(__dirname, './src'),
    },
    output: {
      filename: '[name].bundle.js',
      path: config.dist,
      publicPath: '/',
      chunkFilename: '[name].chunk.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|mjs)$/,
          loader: 'babel-loader',
          exclude: [
            /(node_modules)/,
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '../node_modules'),
          ],
        },
        {
          test: [/\.jpeg?$/, /\.jpg?$/, /\.svg?$/, /\.png?$/],
          loader: 'url-loader',
        },
        {
          test: [/\.css?$/],
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
      ],
    },
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    resolve: {
      extensions: ['.mjs', '.jsx', '.js', '.json', '.jsx', '.css'],
      modules: [
        path.resolve(process.cwd(), 'node_modules'),
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, '../node_modules'),
      ],
      mainFields: ['src', 'module', 'main'],
    },
    // stats: 'none',
    devServer: {
      overlay: true,
      hot: true,
      contentBase: [config.dist, config.public],
      historyApiFallback: {
        index: '/index.html',
      },
    },
    plugins: [
      new Stylish(),
      new webpack.NamedModulesPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          DEV_MODE: JSON.stringify(process.env.DEV_MODE),
        },
      }),
      new Visualizer(), // view at output-dir/stats.html
      new DashboardPlugin(),
      new HtmlWebpackPlugin({
        template: HtmlTemplate,
        inject: false,
        // title: config.settings.site.title,
        appMountId: 'app',
        cache: false,
        mobile: true,
        // window: {
        //   bedrockConfig: config,
        // },
      }),
    ],
    performance: {
      hints: isProd ? 'error' : false,
      maxAssetSize: 300000,
    },
  };

  if (isProd) {
    webpackConfig.mode = 'production';
  } else {
    webpackConfig.mode = 'development';
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return webpackConfig;
}

class BedrockSite {
  constructor(config) {
    this.config = config;
  }

  get webpackConfig() {
    return createWebPackConfig(this.config);
  }
}

module.exports = BedrockSite;
