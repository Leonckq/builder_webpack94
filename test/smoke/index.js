const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')
process.chdir(path.join(__dirname, 'template'))

const Mocha = require('mocha')
const mocha = new Mocha({
  timeout: '10000ms'
})

rimraf('./dist', () => {
  console.log('11111111111111')
  const prodConfig = require('./../../lib/webpack.prod')
  webpack(prodConfig, (err, stats) => {
    console.log(2222222222222222222222222)
    if (err) {
      console.error(err)
      process.exit(2)
    }
    console.log('aadadsadnasidiasdias')
    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: true
      })
    )
    console.log('starting')
    mocha.addFile(path.join(__dirname, 'html-test.js'))
    mocha.addFile(path.join(__dirname, 'css-js-test.js'))
    mocha.run()
  })
})
