import React from 'react';
import TaskItem from './TaskItem'

const TaskList = (props) => {
  return <ul>
    {props.tasks.map((task, index) => {
      return <TaskItem
        task={task}
        key={index}
        removeTask={props.removeTask}
      />
    })}
  </ul>
}

export default TaskList