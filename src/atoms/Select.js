import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  margin-right: 10px;
`;
const StyledLabel = styled.label`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.light};
`;

const Select = ({ children, value, onChangeFn }) => {
  return (
    <>
      <StyledLabel htmlFor="priority">priority:</StyledLabel>
      <StyledSelect
        name="priority"
        id="priority"
        value={value}
        onChange={onChangeFn}
      >
        <option value="default">default</option>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
        {children}
      </StyledSelect>
    </>
  );
};

export default Select;
