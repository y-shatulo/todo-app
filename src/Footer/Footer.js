import React from "react";

import TaskFilter from "../TaskFilter";

export default class Footer extends React.Component {
 render () {
  const { filter, activeCount, onFilterChange, onClearCompleted } = this.props
  return (
    <footer className="footer">
      <span className="todo-count">{activeCount} items left</span>
      <TaskFilter filter={filter}
                  onFilterChange={onFilterChange}/>
      <button className="clear-completed"
              onClick={onClearCompleted} >
        Clear completed
      </button>
    </footer>
  );
 }
}

