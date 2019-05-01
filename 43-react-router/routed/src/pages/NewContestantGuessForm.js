import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class ContestantList extends Component {
  componentDidMount() {
    document.getElementsByTagName('input')[0].focus()
  }

  render() {
    return <div>
      <h1>Enter your guess</h1>
      <form>
        <input
          value={this.props.value}
          onChange={this.props.handleChange}
          name="guess" type="text" placeholder="Bob Ross"
        />
      </form>
      <Link to="/enter-02">Prev</Link>{' '}
      <Link to="/contestants" onClick={this.props.addContestant}>Finish</Link>
    </div>
  }
}

export default ContestantList