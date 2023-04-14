import React from "react";
import Task from "../Task";

const TaskList = ({items}) => {

const elements = items.map(({id, classNames, ...itemsProps}) => {
    return (
      <li key={id} className={classNames}>
        <Task {...itemsProps} />
      </li>
      
    )
})

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  );
}

export default TaskList;