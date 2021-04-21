const path = require("path")
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackBar = require('webpackbar')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Happypack = require('happypack')
const webpack = require("webpack")
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin")
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)
const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entryFiles = glob.sync(resolve('src/*/main.js'))
  entryFiles.forEach( entryFile => {
          const match = entryFile.match(/src\/(.*)\/main\.js/)
          const pageName = match && match[1]
          entry[pageName] = entryFile
          htmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
              template: resolve(`index.html`),
              filename: `${pageName}.html`,
              chunks: [pageName], //指定对应的chunkName，否则会注入所有chunk打包出来的.js
              inject: true,
            })
          )
        })
  return {
    entry,
    htmlWebpackPlugins
  }
}
const { entry, htmlWebpackPlugins } = setMPA()

module.exports = {
  mode: 'none',
  entry: entry,
  module:{
      rules:[
        {
          test: /\.js$/,
          // use: 'happypack/loader?id=babel'
          use: [
            'thread-loader',
            // 'cache-loader',
            'babel-loader?cacheDirectory=true'
          ],
          // exclude: /node_modules/, 
          // include: [path.resolve(__dirname, 'src')]
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      ]
  }, 
  plugins:[
    new CopyWebpackPlugin({
      patterns: [
        {
          from: __dirname + '/src/images',
          to: __dirname + '/dist/images'
        }
      ]
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '!lib/**'
      ]
    }),
    // new Happypack({
    //   id: 'babel', 
    //   use: ['babel-loader'] 
    // }),
    new WebpackBar(),
    
    new webpack.DllReferencePlugin({
      manifest: require('./dist/lib/three.json')
    })
  ].concat(htmlWebpackPlugins)
}