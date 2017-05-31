let merge = require('webpack-merge')
let baseConfig = require('./webpack.base.config')
let path = require('path')
let webpack = require('webpack')
const ENV = process.env.NODE_ENV = process.env.ENV = 'production'
module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'static/js/[name].[hash].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
  ]
})