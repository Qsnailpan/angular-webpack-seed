var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.config')
var config = require('../config')
var express = require('express')
var opn = require('opn')
var path = require('path')
var devMiddleware = require('webpack-dev-middleware')(webpack(webpackConfig), {
  publicPath: config.dev.publicPath,
  index: 'index.html',
  quiet: false
})

var app = express()
app.use(devMiddleware)
app.use(config.dev.publicPath + 'static', express.static(path.resolve(__dirname, '../static')))

var url = 'http://localhost:' + config.dev.port + config.dev.publicPath
var server = app.listen(config.dev.port, function () {
  console.log('Start server at port %s', config.dev.port)
})

var _resolve
var readyPormise = new Promise(function (resolve) {
  _resolve = resolve
})
devMiddleware.waitUntilValid(function () {
  console.log('> Listening at port %s', config.dev.port)
  if (config.dev.autoOpenBrowser) {
    opn(url)
  }
  _resolve()
})

module.exports = {
  ready: readyPormise,
  close: function () {
    server.close()
  }
}