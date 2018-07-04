import * as React from 'react';
import { Component } from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import Store from '../models/todo/TodoListModel';
import TodoModel from '../models/todo/TodoModel';
import Todo from '../components/TodoItem';

interface IProps {
  store: Store;
}

@inject('store')
@observer
class TodoList extends Component<IProps> {

  componentWillMount() {
    this.props.store.fetchTodoList();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type="text"
            value={this.props.store.newTodoName}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <hr />
        <ul>
          {this.props.store.todos.map((todo: TodoModel, index: number) => (
            <Todo todo={todo} key={index} onclick={todo.toggleStatus.bind(todo)}/>
          ))}
        </ul>
        Tasks left: {this.props.store.unfinishedTodoCount}
      </div>
    );
  }

  @action
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.store.newTodoName = e.target && e.target.value;
  };

  @action
  handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    this.props.store.addTodo(this.props.store.newTodoName);
    this.props.store.newTodoName = '';
    e.preventDefault();
  };
}

export default TodoList;
