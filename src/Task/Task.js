import React from "react";
import PropTypes from 'prop-types';

export default class Task extends React.Component {

  static defaultProps = {
    description: '',
    created: Date.now(),
    onCheckDone: () => {},
    onDeleted: () => {},
  };

  static propTypes = {
    description: PropTypes.string,
    created: PropTypes.number,
    onCheckDone: PropTypes.func,
    onDeleted: PropTypes.func,
  };

  render() {

    const {description, created, onCheckDone, onDeleted} = this.props;
    
    return (
        <div className="view">
          <input className="toggle"
                type="checkbox"
                onClick={onCheckDone} />
          <label>
            <span className="description">{description}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"
                  onClick={onDeleted}></button>
        </div>
  );
}
}

