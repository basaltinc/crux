import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const SelectStyledWrapper = styled.label`
  display: inline-block;
  overflow: hidden;
  padding-right: 3px;
  > .label-text {
    display: inline-block;
    margin-right: 5px;
    &:after {
      content: ':';
    }
  }
  /* stylelint-disable property-no-vendor-prefix */
  select {
    max-width: 100%;
    background-color: ${props => props.theme.colors.neutral};
    font-size: 1rem;
    border: ${props => props.theme.form.input.border_none};
    height: ${props => props.theme.form.input.height};
    &:active,
    &:focus {
      //outline: none;
    }
    display: inline-block;
    padding: 0.3rem 2rem 0.3rem 1rem;
    margin: 0;
    box-sizing: 'border-box';
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1rem + -3px),
      calc(100% - 15px) calc(1rem + -3px), calc(30% - 2.5rem) 0.5rem;
    background-size: 5px 5px, 5px 5px, 1px 1.5rem;
    background-repeat: no-repeat;
  }
  /* stylelint-enable property-no-vendor-prefix */

  > span {
    display: inline-block;
    background-color: ${props => props.theme.colors.neutral_light};
    border: ${props => props.theme.form.input.border_none};
    border-radius: ${props => props.theme.border.radius};
    height: ${props => props.theme.form.input.height};
    max-width: 100%;
  }
`;

export class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: this.props.items[props.initialItem].value,
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event) {
    this.setState({
      currentValue: event.target.value,
    });
    this.props.handleChange(event.target.value);
  }

  render() {
    let { currentValue } = this.state;
    /* eslint-disable react/prop-types */
    if (this.props.value) {
      currentValue = this.props.value;
    }
    /* eslint-enable react/prop-types */
    return (
      <SelectStyledWrapper tabIndex="0">
        {this.props.label && (
          <div className="label-text">{this.props.label}</div>
        )}
        <span>
          <select onChange={this.handleSelection} value={currentValue}>
            {this.props.items.map(item => (
              <option tabIndex="0" value={item.value} key={item.value}>
                {item.title ? item.title : item.value}
              </option>
            ))}
          </select>
        </span>
      </SelectStyledWrapper>
    );
  }
}

Select.defaultProps = {
  initialItem: 0,
  label: '',
};

Select.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  initialItem: PropTypes.number,
  label: PropTypes.string,
};
