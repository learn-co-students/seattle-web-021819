import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NewContestantZipForm extends Component {
  componentDidMount() {
    document.getElementsByTagName('input')[0].focus()
  }

  render() {
    return <div>
      <h1>Enter your zip code</h1>
      <form>
        <input
          name="zip" type="number" step="1" max="99999" placeholder="zip"
          onChange={this.props.handleChange}
          value={this.props.value}
        />
      </form>

      <Link to="/enter-01"><button>Prev</button></Link>{' '}
      <Link to="/enter-03"><button>Next</button></Link>
    </div>
  }
}

export default NewContestantZipForm