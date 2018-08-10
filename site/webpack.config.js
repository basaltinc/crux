const path = require('path');

const config = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
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
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.jsx', '.css'],
    modules: ['node_modules', path.resolve(__dirname, '../node_modules')],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  plugins: [],
};

module.exports = config;
