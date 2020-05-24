const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')

const devConfig = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: true,
    port: 3001
  },
  devtool: 'cheap-source-map'
}

module.exports = merge(baseConfig, devConfig)
