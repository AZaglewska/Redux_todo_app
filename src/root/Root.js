import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GlobalStyle from '../GlobalStyles/GlobalStyle';
import Router from '../routing/Router';

const Root = ({ todos, completedTodos }) => {
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  completedTodos: state.completedTodos,
});

export default connect(mapStateToProps)(Root);
