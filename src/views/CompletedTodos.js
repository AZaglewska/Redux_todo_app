import React from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList/TodoList";
import { todosTypes } from "../helpers/todosTypes";

const CompletedTodos = ({ completedTodos }) => {
  return (
    <div>
      <h1>CompletedTodos</h1>
      <TodoList
        todosData={completedTodos}
        todosType={todosTypes.completedTodos}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  completedTodos: state.completedTodos,
});

export default connect(mapStateToProps)(CompletedTodos);
