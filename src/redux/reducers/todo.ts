import { cloneDeep } from "lodash";
import { IAction, ITodo, ITodoMap, ITodoState } from "../../types";
import { ADD_TODO, IAddTodoAction, IReceiveTodoAction, ISetHasFetchedTodosAction, ISetIsFetchingTodosAction, RECEIVE_TODOS, SET_HAS_FETCHED_TODOS, SET_IS_FETCHING_TODOS } from "../actions/todo";

export const initialTodoState: ITodoState = {
  todos: {},
  isFetching: false,
  hasFetched: false
};

export default function reducer(state: ITodoState = initialTodoState, action: IAction) {
  switch (action.type) {
    case ADD_TODO:
      return handleAddTodo(state, action as IAddTodoAction);

    case SET_IS_FETCHING_TODOS:
      return handleSetIsFetchingTodos(state, action as ISetIsFetchingTodosAction);

    case SET_HAS_FETCHED_TODOS:
      return handleSetHasFetchedTodos(state, action as ISetHasFetchedTodosAction);

    case RECEIVE_TODOS:
      return handleReceiveTodos(state, action as IReceiveTodoAction);
  
    default:
      return state;
  }
}




function handleAddTodo(state: ITodoState, action: IAddTodoAction): ITodoState {
  const todo = action.payload;

  return {
    ...state,
    todos: {
      ...state.todos,
      [todo.id]: todo
    }
  };
}


function handleSetIsFetchingTodos(state: ITodoState, action: ISetIsFetchingTodosAction): ITodoState {
  return {
    ...state,
    isFetching: action.payload
  };
}

function handleSetHasFetchedTodos(state: ITodoState, action: ISetHasFetchedTodosAction): ITodoState {
  return {
    ...state,
    hasFetched: action.payload
  };
}

function handleReceiveTodos(state: ITodoState, action: IReceiveTodoAction): ITodoState {
  return {
    ...state,
    todos: action.payload.reduce((obj, todo) => {
      obj[todo.id] = cloneDeep(todo);

      return obj;
    }, {} as ITodoMap)
  };
}