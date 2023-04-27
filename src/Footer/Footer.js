import React from "react";
import PropTypes from 'prop-types';

import TaskFilter from "../TaskFilter";

export default class Footer extends React.Component {

  static defaultProps = {
    filter: 'all', 
    activeCount: 0, 
    onFilterChange: () => {}, 
    onClearCompleted: () => {},
  }

  static propTypes = {
    activeCount: PropTypes.number,
    onFilterChange: PropTypes.func,
    onClearCompleted: PropTypes.func,
  }

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

