import React, {Component} from 'react';
import TaskForm from './TaskForm'
import TaskList from './TaskList'

class TaskMaster extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [
        {priority: 'default', description: 'mow the lawn'},
        {priority: 'low', description: 'purchase lightbulbs'},
        {priority: 'high', description: 'buy dinner stuff'}
      ]
    }

    this.addTask = this.addTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  addTask(task) {
    // accessing properties on .state directly
    // will not trigger React to compare and rerender your app.
    // this.state.tasks.push(task)

    // Also, it's best practice to always create a
    // completely new copy of the thing your modifying.

    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  removeTask(task) {
    // .filter will create a new copy of the array
    // this satisfies what React wants in order to
    // detect proper re-renders
    let tasks = this.state.tasks.filter(tt => {
      return tt !== task
    })
    this.setState({tasks})
  }

  render() {
    return <div>
      <TaskForm addTask={this.addTask} />
      <TaskList removeTask={this.removeTask} tasks={this.state.tasks} />
    </div>
  }
}

export default TaskMaster