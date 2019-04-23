import React, {Component} from 'react'

class ControlledInput extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    let value = ev.target.value
    this.setState({text: value})
  }

  handleSubmit(ev) {
    ev.preventDefault()

    let from = 'Controlled Form'
    let value = ev.target.elements['text'].value
    this.props.onSubmit(value, from)
  }

  render() {
   return <form onSubmit={this.handleSubmit}>
      Controlled
      <input name="text" type="text"
        onChange={this.handleChange}
        value={this.state.text}
      />
      Letters: {this.state.text.length}
      <input type="submit" />
    </form>
  }
}

export default ControlledInput