import styled from "styled-components";
import { NavButton } from "../navBar/navBar.styles";
import { ContainerStyles } from "../../Styles";

export const SummaryBox = styled.div`
  background-color: #f7f7f7;
  margin-bottom: 2.5rem;
  width: 100%;
`;

export const SummaryButton = styled(NavButton)`
  margin-top: 3.5rem;
`;

export const ContentContainer = styled.div`
  ${ContainerStyles}
`;

export const TextContainer = styled.div`
  font-size: 2.5rem;
`;
