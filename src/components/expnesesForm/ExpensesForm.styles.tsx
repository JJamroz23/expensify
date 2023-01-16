import styled from "styled-components";
import { NavButton } from "../navBar/navBar.styles";

export const AddContainer = styled.div``;

export const ExpenseNav = styled.div`
  background-color: #f7f7f7;
  margin-bottom: 2.5rem;
  padding: 2.5rem;
  width: 100%;
`;

export const ExpenseNavText = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  font-size: 3rem;
  padding: 2rem 0;
`;

export const AddItemContainer = styled.div`
  margin: 0 auto;
  max-width: 80rem;
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

export const AddButton = styled(NavButton)`
  display: inline-block;
  font-size: 1.5rem;
`;
