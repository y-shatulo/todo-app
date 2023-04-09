import React from "react";

const TaskFilter = () => {
  return (
    <ul className="filters">
      <li>
        <button className="selected">All</button>
      </li>
      <li>
        <button className="selected">Active</button>
      </li>
      <li>
        <button className="selected">Completed</button>
      </li>
    </ul>
    );
}

export default TaskFilter;