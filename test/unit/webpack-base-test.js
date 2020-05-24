const assert = require('assert')
describe('webpack.base.js test case', () => {
  const baseConfig = require('./../../lib/webpack.base')
  console.log(baseConfig)
  it('entry', () => {
    assert.equal(
      baseConfig.entry.index.indexOf('builder_webpack94/test/smoke/template/src/index/index.tsx') > -1, true
    )
    assert.equal(
      baseConfig.entry.search.indexOf('builder_webpack94/test/smoke/template/src/search/index.tsx') > -1 , true
    )
  })
})
