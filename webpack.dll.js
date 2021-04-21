const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    three: ['three', 'dat.gui']
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'dist/lib'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, 'dist/lib/[name].json') //manifest.json的存放位置
    })
  ]
}