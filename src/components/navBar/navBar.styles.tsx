import styled from "styled-components";

export const AppBarContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  background-color: #043066;
  color: #fff;
`;

export const Expensify = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
`;

export const NavButton = styled.button`
display:inline-block
font-size: 1rem;
padding: 1rem;
border: 2px solid;
border-radius: 5px;
background-color: lightblue;
text-transform: uppercase;
cursor: pointer;
&:active,
&:focus {
  transform: translateY(-0.25rem);
}
`;
