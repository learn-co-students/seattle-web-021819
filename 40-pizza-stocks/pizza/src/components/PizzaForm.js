import React, {Component} from "react"

class PizzaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idValue: props.pizza.id,
      toppingValue: props.pizza.topping,
      sizeValue: props.pizza.size,
      vegetarianValue: props.pizza.vegetarian,
    }

    this.handleUpdatePizza = this.handleUpdatePizza.bind(this)
    this.handleToppingChange = this.handleToppingChange.bind(this)
    this.handleSizeChange = this.handleSizeChange.bind(this)
    this.handleVegChange = this.handleVegChange.bind(this)
  }

  // Deprecated. We're using getDerivedStateFromProps now
  // https://hackernoon.com/replacing-componentwillreceiveprops-with-getderivedstatefromprops-c3956f7ce607
  // componentWillReceiveProps(props) {
  //   this.setState({
  //     idValue: props.pizza.id,
  //     toppingValue: props.pizza.topping,
  //     sizeValue: props.pizza.size,
  //     vegetarianValue: props.pizza.vegetarian,
  //   })
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.pizza.id === prevState.idValue) {
      console.log('getDerived null')
      return null
    }
    console.log('getDerived new {}')
    return {
      idValue: nextProps.pizza.id,
      toppingValue: nextProps.pizza.topping,
      sizeValue: nextProps.pizza.size,
      vegetarianValue: nextProps.pizza.vegetarian,
    }
  }

  handleUpdatePizza() {
    this.props.handleUpdatePizza({
      id: this.state.idValue,
      topping: this.state.toppingValue,
      size: this.state.sizeValue,
      vegetarian: this.state.vegetarianValue
    })
  }

  handleToppingChange(ev) {
    this.setState({toppingValue: ev.target.value})
  }

  handleSizeChange(ev) {
    this.setState({sizeValue: ev.target.value})
  }

  handleVegChange(ev) {
    if (ev.target.value === 'Vegetarian') {
      this.setState({vegetarianValue: true})
    } else {
      this.setState({vegetarianValue: false})
    }
  }

  render() {
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping"
              onChange={this.handleToppingChange}
              value={this.state.toppingValue}
            />
        </div>
        <div className="col">
          <select
            value={this.state.sizeValue} className="form-control"
            onChange={this.handleSizeChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input" type="radio"
              onChange={this.handleVegChange}
              value="Vegetarian" checked={this.state.vegetarianValue}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input" type="radio"
              onChange={this.handleVegChange}
              value="Not Vegetarian" checked={!this.state.vegetarianValue}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button
            type="submit" className="btn btn-success"
            onClick={this.handleUpdatePizza}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default PizzaForm
