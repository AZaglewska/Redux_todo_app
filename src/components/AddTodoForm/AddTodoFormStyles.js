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

export const StyledElements = styled.div`
  margin-top: 20px;

  label {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.light};
  }

  select {
    margin-right: 10px;
  }
`;
