// import styles from './search.module.less'
// import img from './../images/1.png'
// console.log(styles)

import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { module } from './../common/common'
// import img from './../images/1.png'
// import Search from '../search/index.jsx'
type Props = {
  num: number
}

type State = {
  count: string
}
class App extends PureComponent<Props, State> {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {'Search Text'} {module()}
        <div>{/* <img src={img} /> */}</div>
      </div>
    )
  }
}

ReactDOM.render(<App num={1} />, document.getElementById('root1'))
