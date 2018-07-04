import { observable } from "mobx";
import TodoDomain, { StatusEnum, ITodoDomainModel} from '../../domain/TodoDomain';

/**
 * Model control the view state
 *
 * @export
 * @class TodoModel
 */
export default class TodoModel implements ITodoDomainModel {
  id?:number;
  @observable title:string = '';
  @observable status:StatusEnum = StatusEnum.OPEN;

  constructor(title: string, status?: StatusEnum, id?: number) {
    this.title = title;
    this.id = id;
    this.status = status || this.status;
  }

  async toggleStatus() {
    this.status = Number(!this.status);
    await TodoDomain.saveTodo({
      title: this.title,
      status: this.status,
    });
  }
}
