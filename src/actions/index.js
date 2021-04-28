import { actionsTypes } from "./actionsTypes";

export const addTodo = (newTodo) => ({
  type: actionsTypes.ADD_TODO,
  payload: newTodo,
});
