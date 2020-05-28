const cssnano = require('cssnano')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const baseConfig = require('./webpack.base')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const webpack = require('webpack')
const smp = new SpeedMeasurePlugin()
const glob = require('glob')
const path = require('path')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const PATHS = {
  src: path.join(__dirname, 'src')
}
 
const prodConfig = {
  mode: 'production',
  plugins: [
    new OptimizeCSSAssetsPlugin({
      assetsNameRegExp: /\.css$/g,
      cssProcessor: cssnano
    }),
    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'react',
    //       entry: 'https://11.url.cn/now/lib/16.2.0/react.min.js',
    //       global: 'React'
    //     },
    //     {
    //       module: 'react-dom',
    //       entry: 'https://11.url.cn/now/lib/16.2.0/react-dom.min.js',
    //       global: 'ReactDOM'
    //     }
    //   ]
    // })
    new webpack.DllReferencePlugin({
      manifest: require('./../build/library/library.json')
    }),
    // new PurgecssPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    // })
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'vendors',
          chunks: 'all',
          minChunks: 2
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        parallel: false,
        cache: true
      })
    ]
  }
}

module.exports = smp.wrap(merge(baseConfig, prodConfig))
