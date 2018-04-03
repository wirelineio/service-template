//
// Copyright 2017 Wireline, Inc.
//

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');

module.exports = {

  target: 'node',

  stats: 'errors-only',

  entry: {
    handler: [
      'babel-polyfill', path.resolve('./handler.js')
    ]
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },

  // https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',

  plugins: [
    new CopyWebpackPlugin([
      'wireline.yml'
    ]),
    new ZipPlugin({
      path: '../',
      filename: 'webpack.zip'
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,    // Don't transpile deps.
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: './dist/babel-cache/'
          }
        }
      }
    ]
  }
};
