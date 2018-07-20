var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {path: __dirname, filename: 'bundle.js'},
  module: {
    rules: [
      {
        //test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    //https: true
    //devtool: 'eval',
    contentBase: './',
    //hot: true,
    //inline: true,
    historyApiFallback: true
  },
  mode: 'development'//'production'
};
