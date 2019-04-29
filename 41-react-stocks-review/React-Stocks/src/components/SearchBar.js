import React, {Component} from 'react';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      sortBy: 'Alphabetically', // or 'Price'
    }

    this.handleCheckChange = this.handleCheckChange.bind(this)
  }

  handleCheckChange(ev) {
    this.setState({sortBy: ev.target.value})
    this.props.sortBy(ev.target.value)
  }

  handleFilter(ev) {
    let filter = ev.target.value
    this.props.filter(filter)
  }

  render() {
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input type="radio"
            value="Alphabetically"
            checked={this.state.sortBy === 'Alphabetically'}
            onChange={this.handleCheckChange}
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="Price"
            checked={this.state.sortBy === 'Price'}
            onChange={this.handleCheckChange}
          />
          Price
        </label>
        <br/>

        <label>
          <strong>Filter:</strong>
          <select onChange={(ev) => this.handleFilter(ev)}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    )
  }
}


export default SearchBar;
