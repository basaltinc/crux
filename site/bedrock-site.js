const {
  validateSchemaAndAssignDefaults,
} = require('@basalt/bedrock-schema-utils');
const webpack = require('webpack');
const Stylish = require('webpack-stylish');
const Visualizer = require('webpack-visualizer-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlTemplate = require('html-webpack-template');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const bedrockConfigSchema = require('./bedrock.config.schema');

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
          options: {
            extends: '@basalt/bedrock-babel-config/es',
          },
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
    stats: 'none',
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
        title: config.settings.site.title,
        appMountId: 'app',
        cache: false,
        mobile: true,
        scripts: [
          'https://basalt.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/b55nvt/b/2/a44af77267a987a660377e5c46e0fb64/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=6687b2a8',
        ],
        window: {
          bedrockSettings: config.settings,
        },
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
    const results = validateSchemaAndAssignDefaults(
      bedrockConfigSchema,
      config,
    );
    if (!results.ok) {
      console.error(results.message);
      console.error('bedrock config schema validation failed');
      process.exit(1);
    }
    this.config = results.data;
  }

  get webpackConfig() {
    return createWebPackConfig(this.config);
  }
}

module.exports = BedrockSite;
