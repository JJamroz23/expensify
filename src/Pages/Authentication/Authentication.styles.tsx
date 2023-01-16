import styled from "styled-components";
import bgImg from "../../images/bg-img.jpg";
import { FontHeader, ButtonStyles } from "../../Styles";

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
  border-radius: 0.6rem;
  padding: 2rem;
  text-align: center;
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const LayoutHeader = styled.div`
  ${FontHeader}
`;

export const Button = styled.button`
  ${ButtonStyles}
  font-size: 1.6rem;

  &:active {
    transform: translateY(-0.25rem);
  }
`;
