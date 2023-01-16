import styled from "styled-components";
import { NavButton } from "../navBar/navBar.styles";
import { FontHeader, ContainerStyles } from "../../Styles";

export const AddContainer = styled.div``;

export const ExpenseNav = styled.div`
  background-color: #f7f7f7;
  margin-bottom: 2.5rem;
  width: 100%;
  padding-bottom: 1rem;
`;

export const ExpenseNavText = styled.div`
  ${ContainerStyles}
  ${FontHeader}
`;

export const AddItemContainer = styled.div`
  ${ContainerStyles}
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const InputElement = styled.input`
  border: 1px solid;
  height: 5rem;
  font-size: 2rem;
  padding: 1rem;
`;

export const TextAreaElement = styled.textarea`
  border: 1px solid;
  height: 10rem;
  font-size: 2rem;
  padding: 1rem;
`;

export const AddButton = styled(NavButton)``;
