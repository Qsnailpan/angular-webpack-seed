var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config')
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
// var TSLintPlugin = require('tslint-webpack-plugin')
module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html'
    }),

    new webpack.HotModuleReplacementPlugin(),
    // new TSLintPlugin({
    //   files: ['./src/**/*.ts']
    // })
  ]
})

