import React from 'react';
import PropTypes from 'prop-types';

import './spinner.css';

const Spinner = props => (
  <div className="spinner-container">
    <br />
    <div className="spinner">
      <div className="cube1" />
      <div className="cube2" />
    </div>

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
