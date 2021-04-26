import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const Navbar = ({ todos, completedTodos }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.main}>Add todo</Link>
        </li>
        <li>
          <Link to={routes.todos}>Todos in progress ({todos.length})</Link>
        </li>
        <li>
          <Link to={routes.completedTodos}>
            Completed todos ({completedTodos.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  completedTodos: state.completedTodos,
});

//skrócona wersja
// const mapStateToProps = ({ todos, completedTodos }) => ({
//   todos,
//   completedTodos,
// });

export default connect(mapStateToProps)(Navbar);
