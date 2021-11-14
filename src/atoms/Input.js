import React from "react";
import styled from "styled-components";
import { priorityTypes } from "../helpers/priorityTypes";

const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 30px 10px 15px;
  background-color: #efefef;
  width: 90%;
  border-top: 4px solid
    ${({ priority }) =>
      priority === priorityTypes.low
        ? "green"
        : priority === priorityTypes.medium
        ? "yellow"
        : priority === priorityTypes.high
        ? "red"
        : "grey"};
  border-bottom: 0.5px solid lightgray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: bold;
`;

const Input = ({ children, priority, value, isDisabled, onChangeFn }) => {
  return (
    <StyledInput
      placeholder="Todo title..."
      type="text"
      name="title"
      required
      priority={priority}
      value={value}
      disabled={isDisabled}
      onChange={onChangeFn}
    >
      {children}
    </StyledInput>
  );
};

export default Input;
