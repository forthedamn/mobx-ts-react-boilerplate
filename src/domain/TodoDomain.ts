export enum StatusEnum {
  OPEN = 0,
  CLOSE = 1,
}

export interface ITodoDomainModel {
  title: string;
  status: StatusEnum;
  id?: number;
}

/**
 * 领域模型
 * 1.根据后端领域模型进行建模
 * 2.包含所有该业务下与后端交互接口
 * 4.不控制页面显示
 *
 * @class TodoDomain
 */
class TodoDomain {

  async fetchTodoDetail(id: number): Promise<ITodoDomainModel> {
    return {id: 0, title: '111', status: 0};
  }

  async fetchTodoList() {
    console.log('fetch list');
    return [{id: 0, title: '111', status: 0}, {id: 1, title: '222', status: 0}];
  }

  async saveTodo(todoItem: ITodoDomainModel) {
    console.log('saving todoItem, title: %s, status: %s', todoItem.title, todoItem.status);
    return { success: true ,todoItem};
  }

  async addTodo(todoItem: ITodoDomainModel) {
    console.log('add todoItem, title: %s, status: %s', todoItem.title, todoItem.status);
    return { success: true ,todoItem};
  }

}

export default new TodoDomain();
