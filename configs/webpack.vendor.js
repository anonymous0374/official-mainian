var webpack = require('webpack')
var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    jquery: ['jquery'],
    bootstrap: ['bootstrap/dist/js/bootstrap.min.js'],
    // bootstrapCss: 'bootstrap/dist/css/bootstrap.css'
  },
  output: {
    filename: '[hash:8][name].js',
    path: path.resolve(__dirname, '../vendor'),
    library: '[name].vendor.js'
  },
  module: {
    rules: [{
      test: /|.js$/,
      include: [/node_modules/],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }]
    }]
  },
  plugins: [new CleanWebpackPlugin([path.resolve(__dirname, '../vendor')], {
    root: path.resolve(__dirname, '../')
  }), new webpack.DllPlugin({
    name: '[name].vendor.js',
    path: path.resolve(__dirname, '../vendor/vendor-manifest.json')
  })]
}
