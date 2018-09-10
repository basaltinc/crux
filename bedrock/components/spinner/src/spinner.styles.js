import styled, { keyframes } from 'styled-components';

export const SquareDance = keyframes`
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% {
    transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

export const SpinnerCore = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

export const CubeOne = styled.div`
  background-color: #333;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${SquareDance} 1.8s infinite ease-in-out;
`;

export const CubeTwo = styled.div`
  background-color: #333;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${SquareDance} 1.8s infinite ease-in-out;
  animation-delay: -0.9s;
`;
