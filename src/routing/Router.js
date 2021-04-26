import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Todos from "../views/Todos";
import CompletedTodos from "../views/CompletedTodos";
import AddTodo from "../views/AddTodo";
import MainTemplate from "../templates/MainTemplate";

const Router = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.main} component={AddTodo} />
          <Route path={routes.todos} component={Todos} />
          <Route path={routes.completedTodos} component={CompletedTodos} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Router;
