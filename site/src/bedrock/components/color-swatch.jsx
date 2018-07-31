import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { convertColor } from '../packages/utils';

const OuterSwatch = styled.div`
  width: 49%;
  margin-bottom: 10px;
  padding: 5px;
  border: solid 1px grey;
`;

const InnerSwatch = styled.div`
  height: 50px;
  background-color: ${props => (props.colorValue ? props.colorValue : 'auto')};
  border: dashed 1px grey;
`;

const RightLabel = styled.label`
  text-align: right;
  margin-left: 1rem;
  display: block;
`;

const SwatchesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ColorSwatch = ({ color, format }) => {
  const colorValue = convertColor(color.value, format);

  return (
    <OuterSwatch>
      Color: <code>{color.name}</code>
      <br />
      Value: <code>{colorValue}</code>
      <InnerSwatch colorValue={color.value} />
    </OuterSwatch>
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
        <RightLabel>
          Color Format:
          <select
            value={this.state.value}
            onChange={event => this.setState({ format: event.target.value })}
          >
            {options}
          </select>
        </RightLabel>
        <SwatchesWrapper>{colorSwatches}</SwatchesWrapper>
      </div>
    );
  }
}

ColorSwatches.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ColorSwatches;

/* eslint-enable no-useless-constructor react/prefer-stateless-function */
