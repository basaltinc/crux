import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { convertColor } from '@basalt/bedrock-utils';
import { SelectStyledWrapper } from '@basalt/bedrock-atoms';

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

const RightLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const SwatchesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CopyToClipboardWrapper = styled.div`
  float: right;
`;

const ColorSwatch = ({ color, format }) => {
  const colorValue = convertColor(color.value, format);

  return (
    <OuterSwatch>
      Color: <code>{color.name}</code>
      <br />
      Value: <code>{colorValue}</code>
      <CopyToClipboardWrapper>
        <CopyToClipboard
          text={colorValue}
          onCopy={() => window.alert(`${colorValue} copied to clipboard`)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z" />
          </svg>
        </CopyToClipboard>
      </CopyToClipboardWrapper>
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
      format: 'hex',
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
          <SelectStyledWrapper>
            <select
              value={this.state.value}
              onChange={event => this.setState({ format: event.target.value })}
            >
              {options}
            </select>
          </SelectStyledWrapper>
        </RightLabel>
        <SwatchesWrapper>{colorSwatches}</SwatchesWrapper>
      </div>
    );
  }
}

ColorSwatches.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ColorSwatches;

/* eslint-enable no-useless-constructor react/prefer-stateless-function */
