import React, {Component} from 'react';

class TaskForm extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()

    let priority = ev.target.elements['priority'].value
    let description = ev.target.elements['description'].value
    let task = {
      priority: priority,
      description: description
    }
    this.props.addTask(task)
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input name="description" type="text" />
      <select name="priority">
        <option value="default">default</option>
        <option value="low">low</option>
        <option value="med">med</option>
        <option value="high">high</option>
      </select>
      <input type="submit" />
    </form>
  }
}

export default TaskForm