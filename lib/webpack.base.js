const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const setMPA = require('./webpack.util.js')
const projectRoot = process.cwd()
const { entry, htmlWebPackPlugins } = setMPA({ projectRoot })
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
  entry: entry,
  output: {
    filename: '[name]_[hash:8].js',
    path: path.join(projectRoot, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 4
            }
          }, 'babel-loader?cacheDirectory=true']
      },
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.less/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75, // 750设计稿
              remPrecision: 8
            }
          },
          'less-loader'
        ]
      },
      {
        test: /.(png|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    // new BundleAnalyzerPlugin(),
    new HardSourceWebpackPlugin()
  ].concat(htmlWebPackPlugins),
  resolve: {
    alias: {
      // react: req
    },
    modules: [path.resolve('node_modules')],
    extensions: ['.js', '.jsx', '.tsx', '.css', '.json', '.ts']
  }
}
