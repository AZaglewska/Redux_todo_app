import { localTodoData } from "../data/localTodoData";

const initialState = {
  todos: [...localTodoData],
  completedTodos: [
    {
      id: 3,
      title: "Skonczony todo",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, reprehenderit id esse eligendi suscipit dolorum, asperiores, neque reiciendis harum fugit cupiditate provident hic maxime officia iusto iure soluta possimus maiores.",
      priority: "medium",
      completed: true,
      isEditing: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
