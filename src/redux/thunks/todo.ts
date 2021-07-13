import { Dispatch } from "react";
import * as api from '../../api';
import { IRootState } from "../../types";
import { receiveTodos, setHasFetchedTodos, setIsFetchingTodos } from "../actions/todo";

export function fetchTodos() {
  return async (dispatch: Dispatch<any>, getState: () => IRootState) => {
    dispatch(setIsFetchingTodos(true));

    const resp = await api.fetchTodos();

    if (resp.data && resp.data.length > 0) {
      dispatch(receiveTodos(resp.data));
    }

    dispatch(setHasFetchedTodos(true));
    dispatch(setIsFetchingTodos(false));
  };
}