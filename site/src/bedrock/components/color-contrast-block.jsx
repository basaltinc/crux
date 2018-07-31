import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColorContrastPlayground = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 2rem;
  border: solid 1px grey;
  text-align: center;
  background-color: ${props => (props.bgColor ? props.bgColor : 'none')};
`;

const RightLabel = styled.label`
  text-align: right;
  margin-left: 1rem;
`;

const LeftLabel = styled.label`
  text-align: left;
`;

class ColorContrastBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: 'white',
      textColor: 'black',
    };
  }

  render() {
    const bgColors = this.props.bgColors.map(color => (
      <option value={color.value} key={color.name}>
        {color.name}
      </option>
    ));
    const textColors = this.props.textColors.map(color => (
      <option value={color.value} key={color.name}>
        {color.name}
      </option>
    ));
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div>
        <LeftLabel>
          Background Color:
          <select
            value={this.state.bgColor}
            onChange={event => this.setState({ bgColor: event.target.value })}
          >
            {bgColors}
          </select>
        </LeftLabel>
        <RightLabel>
          Text Color:
          <select
            value={this.state.textColor}
            onChange={event => this.setState({ textColor: event.target.value })}
          >
            {textColors}
          </select>
        </RightLabel>
        <ColorContrastPlayground bgColor={this.state.bgColor}>
          <h3
            contentEditable
            style={{
              color: this.state.textColor,
            }}
          >
            Test Your Colors Here
          </h3>
        </ColorContrastPlayground>
      </div>
    );
  }
}

ColorContrastBlock.defaultProps = {};

ColorContrastBlock.propTypes = {
  bgColors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }),
  ).isRequired,
  textColors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ColorContrastBlock;
