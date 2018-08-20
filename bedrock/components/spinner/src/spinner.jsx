import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const SquareDance = keyframes`
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% {
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  }
  100% {
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
`;

const SpinnerCore = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

const CubeOne = styled.div`
  background-color: #333;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: ${SquareDance} 1.8s infinite ease-in-out;
  animation: ${SquareDance} 1.8s infinite ease-in-out;
`;

const CubeTwo = CubeOne.extend`
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
`;

const Spinner = props => (
  <div>
    <br />
    <SpinnerCore>
      <CubeOne />
      <CubeTwo />
    </SpinnerCore>
    <br />
    {props.text && <h2>{props.text}</h2>}
  </div>
);

Spinner.propTypes = {
  text: PropTypes.string,
};

Spinner.defaultProps = {
  text: '',
};

export default Spinner;
