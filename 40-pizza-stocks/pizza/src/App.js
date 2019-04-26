import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const URL = 'http://localhost:3000/pizzas'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas: [],
      pizza: {}
    }
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleUpdatePizza = this.handleUpdatePizza.bind(this)
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(pizzas => {
      this.setState({pizzas})
    })
  }

  handleEditClick(pizza) {
    console.log('edit click', pizza)
    this.setState({pizza}, (newState) => {
      console.log('new state', this.state)
      console.log({newState})
    })
  }

  handleUpdatePizza(newPizza) {
    console.log('handleUpdatePizza', newPizza)
    this.savePizza(newPizza)
    let pizzas = this.state.pizzas.map(pizza => {
      if (pizza.id === newPizza.id) {
        return newPizza
      }
      return pizza
    })
    this.setState({pizzas})
  }

  savePizza(newPizza) {
    fetch()
  }

  render() {
    return (
      <Fragment>
        num pizzas: {this.state.pizzas.length}
        <Header/>
        <PizzaForm pizza={this.state.pizza} handleUpdatePizza={this.handleUpdatePizza} />
        <PizzaList
          pizzas={this.state.pizzas}
          handleEditClick={this.handleEditClick}
        />
      </Fragment>
    );
  }
}

export default App;
