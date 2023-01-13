import styled, { keyframes } from "styled-components";

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const Circle = styled.div`
  border: 3px solid currentcolor;
  width: 3rem;
  height: 3rem;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: 1s ${spin} linear infinite;
  position: relative;
`;

const Loader = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Circle />
    </div>
  );
};

export default Loader;
