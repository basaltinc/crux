import React from 'react';
import PropTypes from 'prop-types';
import { CubeOne, CubeTwo, SpinnerCore } from './spinner.styles';

const Spinner = props => {
  if (props.error) {// used by `react-loadable`
    throw new Error(props.error);
  }
  return (
    <div>
      <br />
      <SpinnerCore>
        <CubeOne />
        {/*@todo the added styles below are for a bug introduced in v4 of sytled components*/}
        <CubeTwo style={{ animationDelay: '-0.9s' }} />
      </SpinnerCore>
      <br />
      {props.text && <h2>{props.text}</h2>}
    </div>
  );
};

Spinner.propTypes = {
  text: PropTypes.string,
};

Spinner.defaultProps = {
  text: '',
};

export default Spinner;
