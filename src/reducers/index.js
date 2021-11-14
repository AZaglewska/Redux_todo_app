import { actionsTypes } from '../actions/actionsTypes';
import {
  getTodosFromLocalStorage,
  getCompletedTodosFromLocalStorage,
} from '../helpers/localStorageGetters';
import { todosTypes } from '../helpers/todosTypes';

const initialState = {
  todos: getTodosFromLocalStorage(),
  completedTodos: getCompletedTodosFromLocalStorage(),
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionsTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case actionsTypes.DELETE_TODO:
      const filteredTodos = state.todos.filter((todo) => todo.id !== payload);

      return {
        ...state,
        todos: [...filteredTodos],
      };

    case actionsTypes.TOGGLE_COMPLETE_TODO:
      const todoToAdd = state[payload.todosType].find(
        (todo) => todo.id === payload.todoId
      );

      const todosAfterTodoRemoved = state[payload.todosType].filter(
        (todo) => todo.id !== payload.todoId
      );

      const arrayToAdd =
        payload.todosType === todosTypes.todos
          ? todosTypes.completedTodos
          : todosTypes.todos;

      return {
        ...state,
        [payload.todosType]: [...todosAfterTodoRemoved],
        [arrayToAdd]: [...state[arrayToAdd], todoToAdd],
      };

    case actionsTypes.TOGGLE_IS_EDITING:
      const mappedTodos = state[payload.todosType].map((todo) => {
        if (todo.id === payload.todoId) {
          return {
            ...todo,
            isEditing: !todo.isEditing,
          };
        } else {
          return todo;
        }
      });

      return {
        ...state,
        [payload.todosType]: [...mappedTodos],
      };

    case actionsTypes.EDIT_TODO:
      const { todoId, newValue, todosType, keyToEdit } = payload;

      const todosAfterEditing = state[todosType].map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            [keyToEdit]: newValue,
          };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        [todosType]: [...todosAfterEditing],
      };

    default:
      return state;
  }
};

export default reducer;
