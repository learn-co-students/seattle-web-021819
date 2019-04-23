import React, {Component} from 'react'

class MultipleInputs extends Component {
  constructor() {
    super()

    this.state = {
      city: 'Seattle',
      state: 'WA'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()

    let from = 'Multiple Inputs'
    let value = this.state.city + ', ' + this.state.state
    this.props.onSubmit(value, from)
  }

  handleCityChange(ev) {
    let value = ev.target.value
    this.setState({city: value})
  }

  handleStateChange(ev) {
    let value = ev.target.value
    this.setState({state: value})
  }

  render() {
   return <form onSubmit={this.handleSubmit}>
      Multiple Inputs
      <input name="city" type="text"
        onChange={this.handleCityChange}
        value={this.state.city}
      />
      <input name="state" type="text"
        onChange={this.handleStateChange}
        value={this.state.state}
      />
      <input type="submit" />
    </form>
  }
}

export default MultipleInputs