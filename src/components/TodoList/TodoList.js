import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import Card from '../../atoms/Card';
import { StyledTodoWrapper, StyledTodoLists } from './TodoListStyles';

const TodoList = ({ todosData, todosType }) => {
  return (
    <StyledTodoWrapper>
      <StyledTodoLists>
        {todosData.map((todo) => (
          <Card key={todo.id}>
            <TodoListItem todo={todo} todosType={todosType} />
          </Card>
        ))}
      </StyledTodoLists>
    </StyledTodoWrapper>
  );
};

export default TodoList;
