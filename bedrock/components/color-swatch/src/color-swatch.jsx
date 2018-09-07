import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { convertColor } from '@basalt/bedrock-utils';
import { Select } from '@basalt/bedrock-atoms';
import {
  OuterSwatch,
  RightLabel,
  InnerSwatch,
  CopyToClipboardWrapper,
  SwatchesWrapper,
} from './color-swatch.styles';

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
    const colorSwatches = this.props.colors.map(color => (
      <ColorSwatch key={color.name} color={color} format={this.state.format} />
    ));
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div>
        <RightLabel>
          Color Format:
          <Select
            value={this.state.value}
            items={['hex', 'rgb', 'hsl'].map(option => ({
              value: option,
              key: option,
              name: option,
            }))}
            handleChange={value => {
              this.setState({ format: value });
            }}
          />
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
