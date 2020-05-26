const glob = require('glob')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const path = require('path')

const setMPA = (srcObj) => {
  const {
    src1 = '/src/*/index.tsx',
    src2 = /src\/(.*)\/index\.tsx/,
    projectRoot
  } = srcObj
  const entry = {}
  const htmlWebPackPlugins = []
  const entryFiles = glob.sync(path.join(projectRoot, src1))
  console.log(entryFiles)
  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index]
    const match = entryFile.match(src2)
    console.log(match)
    const pageName = match && match[1]
    if (pageName) {
      entry[pageName] = entryFile
      return htmlWebPackPlugins.push(
        new HtmlWebapckPlugin({
          inlineSource: '.css$',
          template: path.join(projectRoot, `./src/${pageName}/index.html`),
          filename: `${pageName}.html`,
          chunks: ['vendors', pageName],
          inject: true,
          minify: {
            html5: true,
            collapseWhitespace: true,
            preserveLineBreaks: false,
            minifyCSS: true,
            minifyJS: true,
            removeComments: false
          }
        })
      )
    }
  })

  return {
    entry,
    htmlWebPackPlugins
  }
}

module.exports = setMPA
