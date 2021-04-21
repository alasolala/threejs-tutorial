const path = require("path")
const merge = require('webpack-merge').merge
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }

})
