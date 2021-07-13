import { ITodo } from "./todo";

export interface IRootState {
  todo: ITodoState
}


export type ITodoMap = {
  [key: string]: ITodo
}

export interface ITodoState {
  todos: ITodoMap
  isFetching: boolean
  hasFetched: boolean
}