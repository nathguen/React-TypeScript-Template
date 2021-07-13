import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as uuid from 'uuid';
import { addTodo } from '../../redux/actions/todo';
import { getIsFetchingTodos, getTodos } from '../../redux/selectors/todo';
import { IRootState, ITodo } from '../../types';
import * as S from './styled-components';



export const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state: IRootState) => getTodos(state));
  const isFetchingTodos = useSelector((state: IRootState) => getIsFetchingTodos(state));

  const handleTodoClick = () => {
    const todo: ITodo = {
      id: uuid.v4(),
      name: 'New Todo',
      completed: false
    };

    dispatch(addTodo(todo));
  };


  if (isFetchingTodos) {
    return (
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        size='4x'
      />
    );
  }

  if (todos.length > 0) {
    return (
      <S.TodosList>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={handleTodoClick}>{todo.name}
          </li>
        ))
        }
      </S.TodosList >
    );
  }

  return null;
};

export default TodoList;