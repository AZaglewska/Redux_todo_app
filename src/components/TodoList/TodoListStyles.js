import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTodoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTodoLists = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  font-size: 18px;
  color: #555;
  width: 90%;
  height: 400px;
  padding: 60px 35px 35px 35px;
`;

export const StyledTodoElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 35px 5px;
  border-radius: 40px;
  margin: 40px 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 30px 10px 15px;
  background-color: #efefef;
  width: 90%;
  border-top: 4px solid teal;
  border-bottom: 0.5px solid lightgray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const StyledTextarea = styled.textarea`
  border: none;
  resize: none;
  outline: none;
  padding: 8px 10px;
  height: 100px;
  background-color: #efefef;
  width: 90%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;
