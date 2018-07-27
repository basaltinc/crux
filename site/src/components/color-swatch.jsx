import React from 'react';
import PropTypes from 'prop-types';

const ColorSwatch = ({ color }) => (
  <div
    style={{
      width: '49%',
      marginBottom: '10px',
      padding: '5px',
      border: 'solid 1px grey',
    }}
  >
    Color: <code>{color.name}</code>
    <br />
    Value: <code>{color.value}</code>
    <div
      style={{
        height: '50px',
        backgroundColor: color.value,
        border: 'dashed 1px grey',
      }}
    />
  </div>
);

ColorSwatch.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};

/* eslint-disable no-useless-constructor, react/prefer-stateless-function */
const ColorSwatches = props => {
  const colorSwatches = props.colors.map(color => (
    <ColorSwatch key={color.name} color={color} />
  ));

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {colorSwatches}
    </div>
  );
};

ColorSwatches.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ColorSwatches;

/* eslint-enable no-useless-constructor react/prefer-stateless-function */
