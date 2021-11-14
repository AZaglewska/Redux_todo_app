import React from "react";
import Button from "../../atoms/Button";
import Card from "../../atoms/Card";
import Input from "../../atoms/Input";
import Textarea from "../../atoms/Textarea";
import Select from "../../atoms/Select";
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
      isEditing: false,
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
            <Select name="priority" id="priority" />
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
