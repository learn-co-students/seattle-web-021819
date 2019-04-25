import React, { Component } from 'react';

class Filter extends Component {
  handleSubmit(ev) {
    ev.preventDefault()
    this.props.filter(ev.target.elements['filter'].value)
  }

  render() {
    return (
      <div className="ui grid container">
        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          <input name="filter" type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Filter;
