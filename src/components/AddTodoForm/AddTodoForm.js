import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  StyledTodoFormWrapper,
  StyledTodoForm,
  StyledElementsWrapper,
  StyledTodoInput,
  StyledTodoTextarea,
  StyledElements,
} from "./AddTodoFormStyles";

const AddTodoForm = () => {
  const handleAddTodoForm = (e) => {
    e.preventDefault();

    const id = uuidv4();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const priority = e.target.priority.value;

    const todo = {
      id,
      title,
      content,
      priority,
      completed: false,
    };

    e.target.reset();
  };

  return (
    <StyledTodoFormWrapper>
      <StyledTodoForm onSubmit={handleAddTodoForm}>
        <StyledElementsWrapper>
          <StyledTodoInput
            type="text"
            placeholder="Todo title..."
            name="title"
            required
          />
          <StyledTodoTextarea
            name="content"
            placeholder="Todo content..."
            cols="30"
            rows="10"
          />
          <StyledElements>
            <label htmlFor="priority">priority: </label>
            <select name="priority" id="priority">
              <option value="default">default</option>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
            <button type="submit">+</button>
          </StyledElements>
        </StyledElementsWrapper>
      </StyledTodoForm>
    </StyledTodoFormWrapper>
  );
};

export default AddTodoForm;
