const path = require('path');

module.exports = {
  entry: {
    crux: './js/crux.js',
  },

  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
      },
    ],
  },
};
