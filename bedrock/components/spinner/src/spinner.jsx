import React from 'react';
import PropTypes from 'prop-types';
import { CubeOne, CubeTwo, SpinnerCore } from './spinner.styles';

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
