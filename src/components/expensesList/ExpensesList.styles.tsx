import styled from "styled-components";
import { ContainerStyles } from "../../Styles";
import { NavButton } from "../navBar/navBar.styles";

export const ListBox = styled.div`
  ${ContainerStyles}
  border: 2px solid;
  padding: 0;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #043066;
  padding: 2rem;
  border-bottom: 1px solid;
`;

export const ExpList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  background-color: #f9f9f9;
  border-bottom: 1px solid grey;
  padding: 2rem;
`;

export const ExpItem1 = styled.div`
  font-size: 2rem;
  font-weight: 700;
  justify-self: start;
`;

export const ExpItem2 = styled(ExpItem1)`
  justify-self: end;
  font-weight: 700;
`;
export const ExpItem3 = styled(ExpItem1)`
  font-weight: 400;
  font-size: 1.6rem;
`;

export const ExpItem4 = styled(ExpItem1)`
  font-weight: 400;
  justify-self: end;
  font-size: 1.6rem;
`;

export const Button = styled(NavButton)`
  font-size: 1rem;
`;
