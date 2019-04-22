import React, {Component} from 'react'

class CityInfo extends Component {
  render() {
    return <div>
      <h1>Name: {this.props.name}</h1>
      <p>Population: {this.props.population}</p>
      <p>
        Description: {this.props.description}
      </p>
    </div>
  }
}

export default CityInfo