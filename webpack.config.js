var path = require('path');

module.exports = {
  entry: './lib/oblique.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*']
  }
};
