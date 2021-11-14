import React from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Textarea from '../../atoms/Textarea';
import Select from '../../atoms/Select';
import { connect } from 'react-redux';
import {
  deleteTodo,
  toggleCompleteTodo,
  toggleIsEditing,
  editTodo,
} from '../../actions';
import { todosTypes } from '../../helpers/todosTypes';
import { StyledButtonContainer, StyledWrapper } from './TodoListItemStyles';
import trashIcon from '../../assets/icons/trash-bin.svg';
import checkIcon from '../../assets/icons/checkbox.svg';
import returnIcon from '../../assets/icons/return.svg';
import editIcon from '../../assets/icons/edit.svg';
import closeIcon from '../../assets/icons/close-circular-button-symbol.svg';

const TodoListItem = ({
  todo: { title, content, id, priority, isEditing },
  deleteTodoProps,
  toggleCompletedTodoProps,
  toggleIsEditingFn,
  editTodoFn,
  todosType,
}) => {
  return (
    <>
      <Button
        editIcon={isEditing ? closeIcon : editIcon}
        onClickFn={() => toggleIsEditingFn(id, todosType)}
      />
      <Input
        type="text"
        value={title}
        onChangeFn={(e) => editTodoFn(id, e.target.value, todosType, 'title')}
        priority={priority}
        isDisabled={isEditing ? false : true}
      />
      <Textarea
        value={content}
        cols="30"
        rows="10"
        isDisabled={isEditing ? false : true}
        onChangeFn={(e) => editTodoFn(id, e.target.value, todosType, 'content')}
      />
      <StyledWrapper>
        <Select
          value={priority}
          name="priority"
          id="priority"
          onChangeFn={(e) =>
            editTodoFn(id, e.target.value, todosType, 'priority')
          }
        />
        <StyledButtonContainer>
          <Button
            checkIcon={todosType === todosTypes.todos ? checkIcon : returnIcon}
            onClickFn={() => toggleCompletedTodoProps(id, todosType)}
          />
          <Button trashIcon={trashIcon} onClickFn={() => deleteTodoProps(id)} />
        </StyledButtonContainer>
      </StyledWrapper>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodoProps: (todoId) => dispatch(deleteTodo(todoId)),
  toggleIsEditingFn: (todoId, todosType) =>
    dispatch(toggleIsEditing(todoId, todosType)),
  toggleCompletedTodoProps: (todoId, todosType) =>
    dispatch(toggleCompleteTodo(todoId, todosType)),
  editTodoFn: (todoId, newValue, todosType, keyToEdit) =>
    dispatch(editTodo(todoId, newValue, todosType, keyToEdit)),
});

export default connect(null, mapDispatchToProps)(TodoListItem);
