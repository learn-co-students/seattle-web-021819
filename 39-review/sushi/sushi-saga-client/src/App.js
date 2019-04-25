import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    this.state = {
      sushis: []
    }

    this.loadData()
  }

  loadData() {

  }

  eatSushi(sushi) {
    console.log('eat', {sushi})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  />
        <Table />
      </div>
    );
  }
}

export default App;