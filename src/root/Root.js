import React from "react";
import GlobalStyle from "../GlobalStyles/GlobalStyle";
import Router from "../routing/Router";

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <h1>Todo App</h1>
      <Router />
    </div>
  );
};

export default Root;
