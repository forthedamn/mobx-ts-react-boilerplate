import { observable, computed, action } from "mobx";
import TodoDomain, { StatusEnum } from '../../domain/todoDomain';
import TodoModel from './TodoModel';

/**
 * Model control the view state
 *
 * @export
 * @class TodoListModel
 */
export default class TodoListModel {
  @observable todos: TodoModel[] = [];
  @observable newTodoName: string = '';

  async fetchTodoList() {
    const todoDomainModelList = await TodoDomain.fetchTodoList();
    this.todos = todoDomainModelList.map(todo => new TodoModel(todo.title,todo.status, todo.id));
  }

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => todo.status === StatusEnum.OPEN).length;
  }

  @action
  async addTodo(title: string) {
    const todoModel = new TodoModel(title);
    const ret = await TodoDomain.addTodo(todoModel);
    if (ret.success) {
      this.todos.push(todoModel);
    }
  }
}
