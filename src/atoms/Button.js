import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  background-size: 60%;
  background-position: 50% 24%;
  padding: 23px;
  outline: none;

  ${({ editIcon }) =>
    editIcon &&
    css`
      background-image: url(${editIcon});
    `}

  ${({ trashIcon }) =>
    trashIcon &&
    css`
      background-image: url(${trashIcon});
    `}

  ${({ checkIcon }) =>
    checkIcon &&
    css`
      background-image: url(${checkIcon});
    `}


    ${({ addIcon }) =>
    addIcon &&
    css`
      background-image: url(${addIcon});
    `}
`;

const Button = ({
  children,
  onClickFn,
  trashIcon,
  checkIcon,
  addIcon,
  editIcon,
}) => {
  return (
    <StyledButton
      onClick={onClickFn}
      trashIcon={trashIcon}
      checkIcon={checkIcon}
      addIcon={addIcon}
      editIcon={editIcon}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
