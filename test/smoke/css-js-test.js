const glob = require('glob-all')
describe('checking generated css js files', () => {
  it('should generate css js files', (done) => {
    const files = glob.sync([
      './dist/index:*.js',
      './dist/index_*.css',
      './dist/search:*.js',
      './dist/search_*.css'
    ])
    if (files.length > 0) {
      done()
    } else {
      throw new Error('no css js files generated')
    }
  })
})
