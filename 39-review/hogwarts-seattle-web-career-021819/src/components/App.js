import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Filter from './Filter'
import HogPen from './HogPen'
import hogs from '../porkers_data';

class App extends Component {
  state = {
    currentHogs: [...hogs]
  }

  constructor() {
    super()
    this.filterHogs = this.filterHogs.bind(this)
  }

  filterHogs(filter) {
    let currentHogs = hogs.filter(hog => {
      return hog.name.toLowerCase().includes(filter.toLowerCase())
    })
    this.setState({currentHogs})
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Filter filter={this.filterHogs} />
          <HogPen hogs={this.state.currentHogs} />
      </div>
    )
  }
}

export default App;
