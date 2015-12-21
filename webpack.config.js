var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  context: __dirname + '/app',
  entry: {javascript: './js/app.js',
		html: './index.html'},
  output: { path: __dirname + '/dist' , filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/,
      },
      {
       test: /\.html$/,
       loader: 'file?name=[name].[ext]'
      }
    ]
  },
};
