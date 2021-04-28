import React from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList/TodoList";

const Todos = ({ todos }) => {
  return (
    <div>
      <h1>Todos</h1>
      <TodoList todosData={todos} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todos);
