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
    filename: '[name].js',
    path: path.resolve(__dirname, '../dev/vendor'),
    library: '[name]'
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
  plugins: [new CleanWebpackPlugin([path.resolve(__dirname, '../dev/vendor')], {
    root: path.resolve(__dirname, '../')
  }), new webpack.DllPlugin({
    context: '.',
    name: '[name]',
    path: path.resolve(__dirname, '../dev/vendor/vendor-manifest.json')
  })]
}
