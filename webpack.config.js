const path = require('path');

module.exports = {
  entry: {
    'pattern-lab': './pattern-lab/source/js/pattern-lab.js',
    'grav': './pattern-lab/source/js/grav.js',
  },

  output: {
    path: path.resolve(__dirname, 'build/assets'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
        }
      }
    ]
  }
};
