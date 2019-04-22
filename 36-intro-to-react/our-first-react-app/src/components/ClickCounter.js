import React, {Component} from 'react'

class ClickCounter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  addOne() {
    let count = this.state.count + 1
    this.setState({count: count})
  }

  render() {
    return <div onClick={() => this.addOne()}>
      Clicks: {this.state.count}
    </div>
  }
}

export default ClickCounter