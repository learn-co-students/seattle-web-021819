import React from 'react';
import './TaskItem.css'

const TaskItem = (props) => {
  return <li className={props.task.priority}>
    {props.task.description}
    <button onClick={() => props.removeTask(props.task)}>remove</button>
  </li>
}

export default TaskItem