import React, { Component } from 'react'

import ToDoItems from "./todo-item";

export default class ToDoApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      done: [],
      input: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.input !== "") {
      const newItem = {
        id: Date.now(),
        text: this.state.input,
      };
      this.setState((prevState) => ({
        todo: prevState.todo.concat(newItem),
        input: "",
      }));
    }
  }

  undoItem = (index) => {
    this.setState({
      todo: this.state.todo.concat(this.state.done[index]),
      done: this.state.done.filter((item, key) => key !== index),
    });
  };

  doItem = (index) => {
    this.setState({
      done: this.state.done.concat(this.state.todo[index]),
      todo: this.state.todo.filter((item, key) => key !== index),
    });
  };

  deleteToDoItem = (index) => {
    this.setState({
      todo: this.state.todo.filter((item, key) => key !== index),
    });
  };

  deleteDoneItem = (index) => {
    this.setState({
      done: this.state.done.filter((item, key) => key !== index),
    });
  };

  render() {
    return (
      <div className="todo-container">
        <div className="todo-heading">
          
          <h1 className="todo-heading-text">Todo App</h1>
        </div>

        <div className="todo-lists-container flex">
          <div className="todo-list-container">
            <h2 className="todo-subheading task">Todo List</h2>

            <ToDoItems
              id="todo-list-todo"
              items={this.state.todo}
              toggleDone={this.doItem}
              delete={this.deleteToDoItem}
            />
            <div className="todo-add">
              <form className="todo-add-form" onSubmit={this.handleSubmit}>
                <input
                  id="add-item"
                  className="todo-add-item"
                  type="text"
                  value={this.state.input}
                  onChange={this.handleChange}
                  placeHolder="Clean my room"
                />
                <button className="todo-add-submit-item" type="submit">
                  Add Item
                </button>
              </form>
            </div>
          </div>
          <div className="todo-list-container">
            <h2 className="todo-subheading complated">Completed</h2>

            <ToDoItems
              id="todo-list-done"
              items={this.state.done}
              toggleDone={this.undoItem}
              delete={this.deleteDoneItem}
            />
          </div>
        </div>
      </div>
    );
  }
}
