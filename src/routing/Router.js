import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Todos from "../views/Todos";
import CompletedTodos from "../views/CompletedTodos";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.todos} component={Todos} />
        <Route path={routes.completedTodos} component={CompletedTodos} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
