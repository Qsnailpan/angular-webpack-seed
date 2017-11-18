var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: {
    'vendor': [path.resolve(__dirname, '../src/polyfills.ts'), path.resolve(__dirname, '../src/vendor.ts')],
    'main': path.resolve(__dirname, '../src/main.ts')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      enforce: 'pre',
      loader: 'tslint-loader',
      options: {
        emitErrors: true
      }
    }, {
      test: /\.ts$/,
      loaders: [{// 这个loader用于加载ts文件
        loader: 'awesome-typescript-loader',
        options: {configFileName: path.resolve(__dirname, '../tsconfig.json')}
      }, {// 加载angular2模板
        loader: 'angular2-template-loader'
      }],
    }, {// 对于app目录下的css文件使用raw-loader加载
      test: /\.css$/,
      include: [path.resolve(__dirname, '../src/app')],
      loader: 'raw-loader'
    }, {// 对于app目录下的less文件使用raw-loader加载
      test: /\.less$/,
      include: [path.resolve(__dirname, '../src/app')],
      loader: 'raw-loader!less-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000, // 小于该限制的文件将被base64编码到js文件中
        name: 'static/img/[name].[hash].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'static/fonts/[name].[hash].[ext]'
      }
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'main', 'vendor']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify('production')
      }
    })
  ]
}
