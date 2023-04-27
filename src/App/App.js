import React from "react";
import PropTypes from 'prop-types';
import './App.css';

import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";
import { formatDistanceToNow } from 'date-fns';

export default class App extends React.Component {

  nextId = 0;

  state = {
    items: [],
    filter: 'all',
  } 
 
  createItem(description) {
    return {
      id: this.nextId++,
      description,
      created: `created ${formatDistanceToNow(new Date(), { addSuffix: true })}`,
      done: false,
      editable: false,
    };
  }

  onItemAdded = (description) => {
    this.setState((state) => {
      const item = this.createItem(description);
      return { items: [...state.items, item] };
    })
  };


  onCheckDone = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id);
      const oldItem = items[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [...items.slice(0, idx), newItem, ...items.slice(idx + 1)];
      return {
        items: newArray,
      };
    });
  };

  deleteItem =(id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id);
      const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];
      return {
        items: newArray,
      };
    });
  }

  filter (items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'completed':
        return items.filter((item) => item.done);
      default: 
      return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  onClearCompleted = () => {
    this.setState(({ items }) => {
      const newArray = items.filter((item) => !item.done);
      return {
        items: newArray,
      };
    });
  }

  render () {

    const { items, filter } = this.state;
    const visibleList = this.filter(items, filter);
    const activeCount = items.filter((item) => !item.done).length;


    return (
      
      <section className="todoapp">
        <NewTaskForm onItemAdded={this.onItemAdded}/>
        <section className="main">
          <TaskList items={visibleList}
                    onCheckDone={this.onCheckDone}
                    onDeleted={this.deleteItem} />
          <Footer filter={filter}
                  activeCount={activeCount}
                  onFilterChange={this.onFilterChange}
                  onClearCompleted={this.onClearCompleted}/>
        </section>
      </section>
    );
  }
}
  

