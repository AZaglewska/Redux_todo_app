import React from "react";
import Button from "../../atoms/Button";
import Card from "../../atoms/Card";
import Input from "../../atoms/Input";
import Textarea from "../../atoms/Textarea";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../actions";
import {
  StyledTodoFormWrapper,
  StyledTodoForm,
  StyledElements,
} from "./AddTodoFormStyles";
import addIcon from "../../assets/icons/add.svg";

const AddTodoForm = ({ addTodoProps }) => {
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

    addTodoProps(todo);

    e.target.reset();
  };

  return (
    <StyledTodoFormWrapper>
      <StyledTodoForm onSubmit={handleAddTodoForm}>
        <Card>
          <Input />
          <Textarea />
          <StyledElements>
            <label htmlFor="priority">priority: </label>
            <select name="priority" id="priority">
              <option value="default">default</option>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
            <Button type="submit" addIcon={addIcon}></Button>
          </StyledElements>
        </Card>
      </StyledTodoForm>
    </StyledTodoFormWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodoProps: (newTodo) => dispatch(addTodo(newTodo)),
});

export default connect(null, mapDispatchToProps)(AddTodoForm);
