import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Checkerboard = styled.div`
  background-image: linear-gradient(
      45deg,
      rgb(230, 230, 230) 25%,
      transparent 25%
    ),
    linear-gradient(-45deg, rgb(230, 230, 230) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgb(230, 230, 230) 75%),
    linear-gradient(-45deg, transparent 75%, rgb(230, 230, 230) 75%);
  background-size: 20px 20px;
  background-position: 0px 0px, 0px 10px, 10px -10px, -10px 0px;
  padding: ${props => props.bleed && props.bleed};
  > div {
    display: flex;
    justify-content: center;
    background-color: rgba(77, 77, 77, 0.15);
    padding: 10px;
  }
`;

export const Details = styled.details`
  padding: 7px 0;
  border-top: solid 1px grey;
  border-bottom: solid 1px grey;
  margin-bottom: 10px;
  > summary {
    font-weight: bold;
    outline: none;
    user-select: none;
    font-size: 1.1rem;
    &:hover {
      cursor: pointer;
    }
    &:active,
    &:focus {
      outline: none;
    }
  }
`;

export const SelectStyledWrapper = styled.label`
  display: inline-block;
  height: 33px;
  overflow: hidden;
  padding-right: 3px;
  margin: 0 5px;
  > .label-text {
    margin-right: 5px;
    &:after {
      content: ':';
    }
  }
  > select {
    background-color: #cfe3de;
    border: none;
    font-size: 1rem;
    height: 33px;
    padding: 5px; /* If you add too much padding here, the options won't show in IE */
    &:active,
    &:focus {
      outline: none;
    }
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
    return (
      <SelectStyledWrapper>
        {this.props.label && (
          <span className="label-text">{this.props.label}</span>
        )}
        <select onChange={this.handleSelection} value={this.state.currentValue}>
          {this.props.items.map(item => (
            <option value={item.value} key={item.value}>
              {item.title ? item.title : item.value}
            </option>
          ))}
        </select>
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

export const TwoUp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.25rem;
  & > * {
    width: 48%;
  }
`;

export const TypeToFilterWrapper = styled.div`
  display: inline-block;
  height: 33px;
  overflow: hidden;
  background-color: #cfe3de;
  input {
    height: 33px;
    background-color: none;
    font-size: 0.875rem;
  }
`;