import React, {Component} from 'react'

class MultipleInputs extends Component {
  constructor() {
    super()

    this.state = {
      city: 'Seattle',
      state: 'WA'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAllChanges = this.handleAllChanges.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()

    let from = 'Handle All Changes'
    let value = this.state.city + ', ' + this.state.state
    this.props.onSubmit(value, from)
  }

  handleAllChanges(ev) {
    let key = ev.target.name
    let value = ev.target.value

    // we must use the variable key in brackets to
    // the object will use it's value to associate the key-value
    // alternatively, there's this newer syntax with brackets
    // oo = {[key]: value}
    let oo = {key}
    oo[key] = value

    this.setState(oo)
  }

  render() {
   return <form onSubmit={this.handleSubmit}>
      Handle All Changes
      <input name="city" type="text"
        onChange={this.handleAllChanges}
        value={this.state.city}
      />
      <input name="state" type="text"
        onChange={this.handleAllChanges}
        value={this.state.state}
      />
      <input type="submit" />
    </form>
  }
}

export default MultipleInputs