import React, { Component } from "react";

export default class ToDoItems extends Component {

  render() {
    return (
      <ul id={this.props.id} className="todo-list">
        {this.props.items.map((item, key) => (
          <li className="todo-list-item" key={item.id}>
            <p className="todo-list-item-text">{item.text}</p>
            <div className="todo-list-actions">
              <button
                className="todo-list-action-delete"
                onClick={this.props.delete.bind(item, key)}
              >
                <i class="fas fa-times"></i>
              </button>

              <button
                className="todo-list-action-toggle"
                onClick={this.props.toggleDone.bind(item, key)} 
              >
                <i class="fas fa-check"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
