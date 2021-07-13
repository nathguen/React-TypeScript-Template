import { chain } from "lodash";
import { IRootState, ITodo } from "../../types";

export function getTodos(state: IRootState): ITodo[] {
  return chain(state.todo.todos)
    .values()
    .cloneDeep()
    .value();
}

export function getIsFetchingTodos(state: IRootState): boolean {
  return state.todo.isFetching;
}

export function getHasFetchedTodos(state: IRootState): boolean {
  return state.todo.hasFetched;
}