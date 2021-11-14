import React from 'react';
import { connect } from 'react-redux';
import { routes } from '../../routes';
import { NavList, NavListElement, NavLink } from './NavbarStyles.js';

const Navbar = ({ todos, completedTodos }) => {
  return (
    <nav>
      <NavList>
        <NavListElement>
          <NavLink to={routes.main}>Add todo</NavLink>
        </NavListElement>
        <NavListElement>
          <NavLink to={routes.todos}>
            Todos in progress ({todos.length})
          </NavLink>
        </NavListElement>
        <NavListElement>
          <NavLink to={routes.completedTodos}>
            Completed todos ({completedTodos.length})
          </NavLink>
        </NavListElement>
      </NavList>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  completedTodos: state.completedTodos,
});

export default connect(mapStateToProps)(Navbar);
