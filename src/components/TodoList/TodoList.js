import React from "react";
import {
  StyledTodoWrapper,
  StyledTodoLists,
  StyledTodoElement,
  StyledInput,
  StyledTextarea,
} from "./TodoListStyles";

const TodoList = ({ todosData }) => {
  return (
    <StyledTodoWrapper>
      <StyledTodoLists>
        {todosData.map((todo) => (
          <StyledTodoElement key={todo.id}>
            <StyledInput type="text" value={todo.title} />
            <StyledTextarea value={todo.content} cols="30" rows="10" />
          </StyledTodoElement>
        ))}
      </StyledTodoLists>
    </StyledTodoWrapper>
  );
};

export default TodoList;
