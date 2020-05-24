const assert = require('assert')
describe('webpack.base.js test case', () => {
  const baseConfig = require('./../../lib/webpack.base')
  console.log(baseConfig)
  it('entry', () => {
    assert.equal(
      baseConfig.entry.index,
      '/Volumes/C/baseCli/builder_webpack/test/smoke/template/src/index/index.tsx'
    )
    assert.equal(
      baseConfig.entry.search,
      '/Volumes/C/baseCli/builder_webpack/test/smoke/template/src/search/index.tsx'
    )
  })
})
