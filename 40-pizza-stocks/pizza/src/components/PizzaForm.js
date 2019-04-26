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
  }

  handleUpdatePizza() {
    this.props.handleUpdatePizza({
      id: this.state.idValue,
      topping: this.state.toppingValue,
      size: this.state.sizeValue,
      vegetarian: this.state.vegetarianValue
    })
  }

  render() {
    return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping"
              value={this.state.toppingValue}
            />
        </div>
        <div className="col">
          <select value={this.state.sizeValue} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input" type="radio"
              value="Vegetarian" checked={this.state.vegetarianValue}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input" type="radio"
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
