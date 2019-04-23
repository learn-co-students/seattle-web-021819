import React, {Component} from 'react'

class UncontrolledInput extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()

    let from = 'Uncontrolled Form'
    let value = ev.target.elements['text'].value
    this.props.onSubmit(value, from)
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      Uncontrolled: 
      <input name="text" type="text" />
      <input type="submit" />
    </form>
  }
}

export default UncontrolledInput