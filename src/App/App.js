import React from "react";

import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";
import { formatDistanceToNow } from 'date-fns';

export default class App extends React.Component {

  state = {
    items: [
      {
        id: 1,
        description: 'Completed task',
        created: `created ${formatDistanceToNow(new Date(), { addSuffix: true })}`,
        done: true,
        editable: false,

      },
      {
        id: 2,
        description: 'Editing task',
        created: `created ${formatDistanceToNow(new Date(), { addSuffix: true })}`,
        done: false,
        editable: true,
      },
      {
        id: 3,
        description: 'Active task',
        created: `created ${formatDistanceToNow(new Date(), { addSuffix: true })}`,
        done: false,
        editable: false,
      },
    ]
  } 
 


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

  render () {
    return (
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList items={this.state.items}
                    onCheckDone={this.onCheckDone}
                    onDeleted={this.deleteItem} />
          <Footer />
        </section>
      </section>
    );
  }
}
  

