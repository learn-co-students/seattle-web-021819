import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ContestantList extends Component {
  componentDidMount() {
    document.getElementsByTagName('input')[0].focus()
  }

  render() {
    return <div>
      <h1>Enter your name</h1>
      <form>
        {/* onChange invokes whatever function it received a reference to from somewhere else */}
        {/* whatever that function is, it will pass the ev parameter to. */}
        {/* <input name="name" type="text" placeholder="name" onChange={(ev) => this.props.handleChange(ev)} /> */}
        <input
          value={this.props.value}
          name="name" type="text" placeholder="name"
          onChange={this.props.handleChange}
        />
      </form>

      <Link to="/enter-02">Next</Link>
    </div>
  }
}

export default ContestantList