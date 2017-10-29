var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
module.exports = {
  entry: {
    'polyfills': path.resolve(__dirname, '../src/polyfills.ts'),
    'app': path.resolve(__dirname, '../src/main.ts')
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, '../node_modules')]
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loaders: [{// 这个loader用于加载ts文件
        loader: 'awesome-typescript-loader',
        options: {configFileName: path.resolve(__dirname, '../tsconfig.json')}
      }, {// 加载angular2模板
        loader: 'angular2-template-loader'
      }],
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {// css加载器
      test: /\.css$/,
      loader: 'raw-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),

    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify('production')
      }
    })
  ]
}