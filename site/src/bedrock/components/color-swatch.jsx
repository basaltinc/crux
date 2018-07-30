import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertColor } from '../packages/utils';

const ColorSwatch = ({ color, format }) => {
  const colorValue = convertColor(color.value, format);
  return (
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
      Value: <code>{colorValue}</code>
      <div
        style={{
          height: '50px',
          backgroundColor: colorValue,
          border: 'dashed 1px grey',
        }}
      />
    </div>
  );
};

ColorSwatch.propTypes = {
  format: PropTypes.string.isRequired,
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};

class ColorSwatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hsl',
    };
  }

  render() {
    const options = ['hsl', 'rgb', 'hex'].map(option => (
      <option value={option} key={option}>
        {option}
      </option>
    ));
    const colorSwatches = this.props.colors.map(color => (
      <ColorSwatch key={color.name} color={color} format={this.state.format} />
    ));
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div>
        <label
          style={{
            textAlign: 'right',
            width: '100%',
            display: 'block',
          }}
        >
          Color Format:
          <select
            value={this.state.value}
            onChange={event => this.setState({ format: event.target.value })}
          >
            {options}
          </select>
        </label>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          {colorSwatches}
        </div>
      </div>
    );
  }
}

ColorSwatches.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ColorSwatches;

/* eslint-enable no-useless-constructor react/prefer-stateless-function */
