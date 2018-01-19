var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    filename: '[hash:9][name].js',
    path: path.resolve(__dirname, '../dev/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../src/index.html'),
    filename: path.resolve(__dirname, '../dev/index.html')
  }), new CleanWebpackPlugin([path.resolve(__dirname, '../dev')], {
    root: path.resolve(__dirname, '../')
  }), new ExtractTextWebpackPlugin({
    filename: '[hash:8][name].css'
  }), new webpack.DllReferenceWebpackPlugin({})],
  resolve: {
    alias: {
      'styles': path.resolve(__dirname, './src/styles')
    }
  }
}
