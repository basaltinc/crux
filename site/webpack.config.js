const webpack = require('webpack');
const Stylish = require('webpack-stylish');
const path = require('path');
const buildBabelConfig = require('./buildBabelConfig');

const isProd = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    main: './src',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: buildBabelConfig(true),
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
  devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
  resolve: {
    extensions: ['.mjs', '.jsx', '.js', '.json', '.jsx', '.css'],
    modules: ['node_modules', path.resolve(__dirname, '../node_modules')],
  },
  stats: 'none',
  devServer: {
    overlay: true,
    hot: true,
    contentBase: [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'public2'),
      path.join(__dirname, '../source/dist'),
    ],
    proxy: {
      '/api': 'http://localhost:3042',
    },
    after: app => {
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/index.html'));
      });
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
  ],
  performance: {
    hints: isProd ? 'error' : false,
    maxAssetSize: 300000,
  },
};

if (isProd) {
  config.mode = 'production';
} else {
  config.mode = 'development';
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
