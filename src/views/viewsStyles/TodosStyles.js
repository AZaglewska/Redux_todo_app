import styled from 'styled-components';

export const TodosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.light};
    margin: 0px 10px 0px;
  }

  img {
    width: 35px;
  }
`;
