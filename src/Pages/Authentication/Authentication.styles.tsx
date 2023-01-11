import styled from "styled-components";
import bgImg from "../../images/bg-img.jpg";

export const Layout = styled.div`
  align-items: center;
  justify-content: center;
  background: url(${bgImg});
  background-size: cover;
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LayoutBox = styled.div`
  background-color: #fff;
  // border: 2px solid;
  border-radius: 0.6rem;
  padding: 2rem;
  text-align: center;
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const LayoutHeader = styled.div`
  font-size: 3.6rem;
  font-weight: 700;
`;

export const Button = styled.button`
  display: inline-block;
  font-size: 1rem;
  padding: 1rem 2rem;
  border: 2px solid;
  border-radius: 3px;
  background-color: lightblue;
  text-transform: uppercase;
  cursor: pointer;

  &:active {
    transform: translateY(-0.25rem);
  }
`;
