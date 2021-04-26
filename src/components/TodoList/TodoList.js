import React from "react";
import {
  StyledTodoWrapper,
  StyledTodoLists,
  StyledTodoElement,
} from "./TodoListStyles";

const TodoList = ({ todosData }) => {
  return (
    <StyledTodoWrapper>
      <StyledTodoLists>
        <h3>Todos</h3>
        {todosData.map((todo) => (
          <StyledTodoElement key={todo.id}>
            <input type="text" value={todo.title} />
            <textarea value={todo.content} cols="30" rows="10" />
          </StyledTodoElement>
        ))}
      </StyledTodoLists>
    </StyledTodoWrapper>
  );
};

export default TodoList;
