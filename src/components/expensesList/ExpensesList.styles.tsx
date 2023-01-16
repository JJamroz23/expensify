import styled from "styled-components";

export const ListBox = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  border: 2px solid;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lightGrey;
  padding: 2rem;
  border-bottom: 1px solid;
`;

export const ExpList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  /* flex-direction: column; */
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
`;
export const ExpItem3 = styled(ExpItem1)`
  font-weight: 400;
  font-size: 1.6rem;
`;
