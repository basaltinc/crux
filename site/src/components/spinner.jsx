import React from 'react';
import PropTypes from 'prop-types';

import './spinner.css';

const Spinner = props => (
  <div className="spinner-container">
    <br />
    <br />
    <br />
    <br />
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube" />
      <div className="sk-cube2 sk-cube" />
      <div className="sk-cube4 sk-cube" />
      <div className="sk-cube3 sk-cube" />
    </div>
    <br />
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
