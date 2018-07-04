import * as React from 'react';
import { ITodoDomainModel, StatusEnum } from '../domain/todoDomain';

interface ITodoProps {
  todo: ITodoDomainModel;
  onclick: (todo?: ITodoDomainModel) => void;
}

/**
 * component stateless
 */
const TodoItem = ({ todo, onclick}: ITodoProps) => (
  <li>
    <input
      type="checkbox"
      checked={todo.status === StatusEnum.CLOSE }
      onClick={() => {
        onclick();
      }}
    />
    {todo.title}
  </li>
);

export default TodoItem;
