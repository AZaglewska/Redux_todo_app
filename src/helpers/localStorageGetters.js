export const getTodosFromLocalStorage = () => {
  let todosFromLocalStorage;

  if (localStorage.getItem("todos")) {
    console.log("SĄ");
    todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));
  } else {
    console.log("NIE MA");
    todosFromLocalStorage = [];
  }

  return todosFromLocalStorage;
};

export const getCompletedTodosFromLocalStorage = () => {
  let completedTodosLocalStorage;

  if (localStorage.getItem("completedTodos")) {
    completedTodosLocalStorage = JSON.parse(
      localStorage.getItem("completedTodos")
    );
  } else {
    completedTodosLocalStorage = [];
  }

  return completedTodosLocalStorage;
};
