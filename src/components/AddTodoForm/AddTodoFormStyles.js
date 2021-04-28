import styled from "styled-components";

export const StyledTodoFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTodoForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  font-size: 18px;
  color: #fff;
  width: 50%;
  height: 100%;
  padding: 60px 35px 35px 35px;
  border-radius: 10px;
`;

export const StyledElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  border-radius: 10px;
  width: 50%;
  padding: 20px 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const StyledTodoInput = styled.input`
  border: none;
  outline: none;
  padding: 30px 10px 15px;
  background-color: #efefef;
  width: 90%;
  border-top: 4px solid teal;
  border-bottom: 0.5px solid lightgray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.dark};
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: bold;
  }
`;

export const StyledTodoTextarea = styled.textarea`
  border: none;
  resize: none;
  outline: none;
  padding: 8px 10px;
  height: 100px;
  background-color: #efefef;
  width: 90%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  &::-webkit-input-placeholder {
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.lightGrey};
    font-weight: 100;
  }
`;

export const StyledElements = styled.div`
  margin-top: 20px;

  label {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.light};
  }

  select {
    margin-right: 10px;
  }

  button {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.light};
    font-size: 20px;
    padding: 3px 9px;
    outline: none;
    border-radius: 50%;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;
