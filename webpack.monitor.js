const path = require("path")
const merge = require('webpack-merge').merge
const base = require('./webpack.base')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()

module.exports = smp.wrap(merge(base, {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name]_[chunkhash:6].js'
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]

}))