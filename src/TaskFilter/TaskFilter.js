import React from "react";

export default class TaskFilter extends React.Component {
  render() {
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
}

