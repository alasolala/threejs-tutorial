const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
      path: path.join(__dirname,"/dist"),
      filename: "bundle.js"
  },
  module:{
      rules:[
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/, 
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
    new HtmlWebpackPlugin({
      template: 'index.html', 
      filename: 'index.html', 
      inject: true, 
      minify: {
        removeComments: true, 
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: __dirname + '/src/images',
          to: __dirname + '/dist/images'
        }
      ]
    })

  ], 
  devServer: {
    contentBase: './dist',
    hot: true
  }
}