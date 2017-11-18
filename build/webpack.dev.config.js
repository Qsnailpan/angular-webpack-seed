var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.config')
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

Object.keys(baseConfig.entry).forEach(function (name) {
  baseConfig.entry[name] = ['webpack-hot-middleware/client?reload=true'].concat(baseConfig.entry[name])
})
module.exports = merge(baseConfig, {
  devtool: '#cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{// 对于app目录之外的css文件使用style-loader加载
      test: /\.css$/,
      exclude: [path.resolve(__dirname, '../src/app')],
      loader: 'style-loader!css-loader'
    }, {// 对于app目录之外less文件使用style-loader加载
      test: /\.less$/,
      exclude: [path.resolve(__dirname, '../src/app')],
      loader: 'style-loader!css-loader!less-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})

