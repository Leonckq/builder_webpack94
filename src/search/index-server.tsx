import styles from './search.module.less'
// import img from './../images/1.png'
// console.log(styles)

import React, { PureComponent } from 'react'
// import { module as mm } from '../common/common'
import img from './../images/1.png'
// import Search from '../search/index.jsx'
// const React = require('react')
// const { PureComponent } = require('react')
type Props = {
  num: number
}

type State = {
  count: string
}
class Search extends PureComponent<Props, State> {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={styles.txt}>
        {'Search Text'}
        <div><img src={img} /></div>
      </div>
    )
  }
}

module.exports = <Search num={0} />
