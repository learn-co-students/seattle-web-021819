import React, {Component} from 'react'

class StarTrek extends Component {
  render() {
    return <div>
      <h1>Star Trek</h1>
      <button onClick={this.props.handleClick}>increment click</button>
    </div>
  }
}

export default StarTrek