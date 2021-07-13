import { IAction, ITodo } from "../../types";

export const ADD_TODO = 'todo/ADD_TODO';
export const RECEIVE_TODOS = 'todo/RECEIVE_TODOS';
export const SET_IS_FETCHING_TODOS = 'todo/SET_IS_FETCHING_TODOS';
export const SET_HAS_FETCHED_TODOS = 'todo/SET_HAS_FETCHED_TODOS';



export interface IAddTodoAction extends IAction {
  payload: ITodo
}

export const addTodo = (todo: ITodo): IAddTodoAction => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};





export interface IReceiveTodoAction extends IAction {
  payload: ITodo[]
}

export const receiveTodos = (todos: ITodo[]): IReceiveTodoAction => {
  return {
    type: RECEIVE_TODOS,
    payload: todos
  };
};



export interface ISetHasFetchedTodosAction extends IAction {
  payload: boolean
}

export const setHasFetchedTodos = (hasFetched: boolean) => {
  return {
    type: SET_HAS_FETCHED_TODOS,
    payload: hasFetched
  };
};



export interface ISetIsFetchingTodosAction extends ISetHasFetchedTodosAction {}

export const setIsFetchingTodos = (isFetching: boolean) => {
  return {
    type: SET_IS_FETCHING_TODOS,
    payload: isFetching
  };
};