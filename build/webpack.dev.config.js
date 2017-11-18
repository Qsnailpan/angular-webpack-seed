var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config')
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

Object.keys(baseConfig.entry).forEach(function (name) {
  baseConfig.entry[name] = ['webpack-hot-middleware/client?reload=true'].concat(baseConfig.entry[name])
})
module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      enforce: 'pre',
      loader: 'tslint-loader',
      options: {
        emitErrors: true
      }
    },]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})

