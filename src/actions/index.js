import { actionsTypes } from "./actionsTypes";

export const addTodo = (newTodo) => ({
  type: actionsTypes.ADD_TODO,
  payload: newTodo,
});

export const deleteTodo = (todoId) => ({
  type: actionsTypes.DELETE_TODO,
  payload: todoId,
});
