import React from "react";
import PropTypes from 'prop-types';
import './NewTaskForm.css';

export default class NewTaskForm extends React.Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  };

  onSubmit = (e) => {
    if (e.keyCode === 13) {
        this.props.onItemAdded(e.target.value);
        e.target.value = "";
    }
  }

  static defaultProps = {
    onLabelChange: () => {},
  };

  static propTypes = {
    onLabelChange: PropTypes.func,
  };

  render() {
    const {onLabelChange} = this.props;

    return (
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              onChange={onLabelChange}
              onKeyDown={this.onSubmit}></input>
      </header>
    );
  }
}

