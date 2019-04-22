import React, {Component} from 'react'

class RandomAdder extends Component {
  constructor() {
    super()
    this.state = {
      num1: Math.floor(10 * Math.random()),
      num2: Math.floor(10 * Math.random())
    }
  }

  render() {
    return <div>
      {this.state.num1} + {this.state.num2} =
      {this.state.num1 + this.statenum2}
    </div>
  }
}

export default RandomAdder;