import React from "react";
import Navbar from "../components/navigations/Navbar";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../GlobalStyles/mainTheme";

const MainTemplate = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
