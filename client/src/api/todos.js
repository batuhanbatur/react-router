import { baseApi } from "./base";

export function getTodos(options) {
  return baseApi.get("todos", options).then((res) => res.data);
}

export function newTodo(data, options) {
  return baseApi.post("todos", data, options).then((res) => res.data);
}
