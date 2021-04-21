const path = require("path")
const merge = require('webpack-merge').merge
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name]_[chunkhash:6].js'
  }
})