import styled from "styled-components";

export const WidthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 80rem;
`;

export const AppBarContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  background-color: #043066;
  color: #fff;
`;

export const Expensify = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
`;

export const NavButton = styled.button`
  display: inline-block;
  font-size: 1rem;
  padding: 1rem;
  border: 2px solid;
  border-radius: 5px;
  background-color: lightblue;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.25rem);
  }
`;
