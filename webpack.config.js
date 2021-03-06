const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  mode: 'production'
};