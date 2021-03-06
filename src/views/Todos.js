import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList/TodoList';
import todoIcon from '../assets/icons/to-do-list.svg';
import { TodosWrapper } from './viewsStyles/TodosStyles';
import { todosTypes } from '../helpers/todosTypes';

const Todos = ({ todos }) => {
  return (
    <div>
      <TodosWrapper>
        <h1>Todos</h1>
        <img src={todoIcon} alt="Todo icon" />
      </TodosWrapper>

      <TodoList todosData={todos} todosType={todosTypes.todos} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todos);
