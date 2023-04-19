import React from "react";
import Task from "../Task";


export default class TaskList extends React.Component {

  render() {
   const { items, onCheckDone, onDeleted } = this.props;
 
   const elements = items.map(({id, editable, ...itemProps}) => {

    let classNames = "";
    if (itemProps.done) classNames += "completed";
    if (editable) classNames += "editing";

    return (
      <li key={id} className={classNames}>
        <Task {...itemProps}
              onCheckDone={() => onCheckDone(id)}
              onDeleted={() => onDeleted(id)} />
      </li>
      
    )
})

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  );
  }

}
