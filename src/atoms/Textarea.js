import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
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
  font-weight: 500;
  &::-webkit-input-placeholder {
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const Textarea = ({ children, value, isDisabled, onChangeFn }) => {
  return (
    <StyledTextarea
      name="content"
      placeholder="Todo content..."
      cols="30"
      rows="10"
      value={value}
      disabled={isDisabled}
      onChange={onChangeFn}
    >
      {children}
    </StyledTextarea>
  );
};

export default Textarea;
