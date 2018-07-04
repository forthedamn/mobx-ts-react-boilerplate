import * as React from 'react';
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import TodoListModel from "./models/todo/TodoListModel";
import TodoList from './page/List';

const todoListStore = new TodoListModel();
render(
  <div>
    <DevTools />
    <TodoList store={todoListStore}/>
  </div>,
  document.getElementById("root")
);

