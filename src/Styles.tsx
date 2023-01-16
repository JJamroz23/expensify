import { css } from "styled-components";

const size = {
  mobile: "500px",
  tablet: "900px",
  laptop: "1024px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
};

export const FontHeader = css`
  font-size: 3.6rem;
  font-weight: 700;
`;

export const ButtonStyles = css`
  display: inline-block;
  text-transform: uppercase;
  padding: 1rem 2rem;
  border: 2px solid;
  background-color: #add8e6;
  cursor: pointer;
  border-radius: 5px;
`;

export const ContainerStyles = css`
  margin: 0 auto;
  max-width: 80rem;
  padding: 2rem 0;
`;

export const InputFilterStyles = css`
  width: 20%;
  height: 3rem;
  font-size: 1.6rem;
`;
