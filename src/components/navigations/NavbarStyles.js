import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 400;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  padding: 40px 0;
`;

export const NavListElement = styled.li`
  margin: 0 20px;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
`;
