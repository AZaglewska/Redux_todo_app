import { actionsTypes } from "./actionsTypes";

export const addTodo = (newTodo) => ({
  type: actionsTypes.ADD_TODO,
  payload: newTodo,
});

export const deleteTodo = (todoId) => ({
  type: actionsTypes.DELETE_TODO,
  payload: todoId,
});

export const toggleCompleteTodo = (todoId, todosType) => ({
  type: actionsTypes.TOGGLE_COMPLETE_TODO,
  payload: {
    todoId,
    todosType,
  },
});

export const toggleIsEditing = (todoId, todosType) => ({
  type: actionsTypes.TOGGLE_IS_EDITING,
  payload: { todoId, todosType },
});

export const toggleIsEditingCompleted = (todoId) => ({
  type: actionsTypes.TOGGLE_IS_EDITING_COMPLETED,
  payload: todoId,
});

export const editTodo = (todoId, newValue, todosType, keyToEdit) => ({
  type: actionsTypes.EDIT_TODO,
  payload: { todoId, newValue, todosType, keyToEdit },
});
