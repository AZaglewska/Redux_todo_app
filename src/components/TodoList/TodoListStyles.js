import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTodoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTodoLists = styled.ul`
  list-style: none;
  font-size: 18px;
  text-align: center;
  color: #555;
  width: 430px;
  height: 700px;
  padding: 60px 35px 35px 35px;
  border-radius: 40px;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
`;

export const StyledTodoElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 35px 5px;
  border-radius: 40px;
  margin: 40px 0;
  background: #ecf0f3;
  box-shadow: 8px 8px 15px #cbced1, -10px -10px 13px #ffffff;
`;
