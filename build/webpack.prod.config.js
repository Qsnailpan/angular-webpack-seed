var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config')
var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
const ENV = process.env.NODE_ENV = process.env.ENV = 'production'

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      exclude: [path.resolve(__dirname, '../src/app')],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }, {
      test: /\.less$/,
      exclude: [path.resolve(__dirname, '../src/app')],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader']
      })
    }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: 'static',
      ignore: ['.*'] // 忽略没有文件名的文件
    }]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin({filename: 'static/styles/[name].[contenthash].css', allChunks: true})
  ]
})