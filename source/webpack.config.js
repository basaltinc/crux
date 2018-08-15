const path = require('path');

module.exports = {
  entry: {
    'pattern-lab': './js/pattern-lab.js',
    'grav': './js/grav.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        }
      }
    ]
  }
};
