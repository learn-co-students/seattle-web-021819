import React, {Component} from 'react'

class ContestantList extends Component {
  render() {
    return <div>
      <h1>ContestantList</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Zip</th>
          <th>Guess</th>
        </tr>
        {this.props.contestants.map(entry => {
          return <tr>
            <td>{entry.name}</td>
            <td>{entry.zip}</td>
            <td>{entry.guess}</td>
          </tr>
        })}
      </table>
    </div>
  }
}

export default ContestantList