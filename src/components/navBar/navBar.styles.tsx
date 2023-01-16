import styled from "styled-components";
import { FontHeader, ButtonStyles, ContainerStyles } from "../../Styles";

export const WidthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${ContainerStyles}
`;

export const AppBarContainer = styled.div`
  width: 100%;
  background-color: #043066;
  color: #fff;
`;

export const Expensify = styled.div`
  ${FontHeader}
  cursor: pointer;
`;

export const NavButton = styled.button`
  ${ButtonStyles}

  &:hover {
    transform: translateY(-0.25rem);
  }
`;
