import React, {Component} from 'react'
import GroceryItem from './GroceryItem'

class GroceryList extends Component {
  constructor() {
    super()
    this.state = {
      items: [
        {name: 'Milk', price: 2.99},
        {name: 'Eggs', price: 1.78},
        {name: 'Vegetables', price: 5.33},
        {name: 'Bacon', price: 5.99},
      ]
    }
  }

  render() {
    return <div>
      <h1>Grocery List</h1>
      <ul>
        {this.state.items.map((item, index) => {
          return <GroceryItem grocery={item} key={index} />
        })}
      </ul>
    </div>
  }
}

export default GroceryList