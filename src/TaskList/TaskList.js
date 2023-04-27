import React from "react";
import Task from "../Task";
import PropTypes from 'prop-types';


export default class TaskList extends React.Component {

  static defaultProps = {
    items: [],
    onCheckDone: () => {},
    onDeleted: () => {},
};

static propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
            editable: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
      })
    ),
    onCheckDone: PropTypes.func,
    onDeleted: PropTypes.func,
  };

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
