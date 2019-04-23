import React, {Component} from 'react';
import './App.css';

import TaskMaster from './components/task-master/TaskMaster'

import UncontrolledInput from './components/00-UncontrolledInput'
import ControlledInput from './components/01-ControlledInput'
import MultipleInputs from './components/02-MultipleInputs'
import HandleAllChanges from './components/03-HandleAllChanges'

class App extends Component {
  constructor() {
    super()

    this.state = {
      value: 'unset',
      from: 'nothing',
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  // this function updates the state of the whole App
  // a reference to this function gets passed down into
  // other components that can invoke this function later.
  onSubmit(value, from) {
    this.setState({
      value: value,
      from: from
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TaskMaster />

          <p>From: {this.state.from}</p>
          <p>Value: {this.state.value}</p>

          <UncontrolledInput onSubmit={this.onSubmit} />
          <ControlledInput onSubmit={this.onSubmit} />
          <MultipleInputs onSubmit={this.onSubmit} />
          <HandleAllChanges onSubmit={this.onSubmit} />
        </header>
      </div>
    );
  }
}

export default App;
