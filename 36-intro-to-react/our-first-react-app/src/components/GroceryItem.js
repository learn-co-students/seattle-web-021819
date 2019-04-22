import React, {Component} from 'react'

class GroceryItem extends Component {
  textPriceDisplay() {
        return this.props.grocery.name + ' $' +
               this.props.grocery.price
  }

  switchOnItemPrice() {
    if (this.props.grocery.price < 2) {
      return <li className="highlight">
        {this.textPriceDisplay()}
      </li>
    } else {
      return <li>
        {this.textPriceDisplay()}
      </li>
    }
  }

  render() {
    // use className attribute instead of just "class"
    // because the HTML class keyword would conflict with
    // the JavaScript class keyword

    // ternary operator
    // result will be value1 if boolean is true
    // result will be value2 if boolean is false
    // result = boolean ? value1 : value2
    return this.switchOnItemPrice()
  }
}

export default GroceryItem