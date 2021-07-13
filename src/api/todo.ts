import todos from '../dummy-data/todos.json';
import { IResponse, ITodo } from "../types";
import { sleep } from "../utils/sleep";

interface IFetchTodosResponse extends IResponse {
  data?: ITodo[]
}

export async function fetchTodos(): Promise<IFetchTodosResponse> {
  // mimics api response time
  await sleep(500);

  return {
    success: true,
    data: todos
  };
}