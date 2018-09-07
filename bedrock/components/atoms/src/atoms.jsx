import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export * from './status-message';

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
  border-top: solid 1px ${props => props.theme.colors.color.gray.dark};
  border-bottom: solid 1px ${props => props.theme.colors.color.gray.dark};
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
    background-color: ${props => props.theme.colors['neutral-light']};
    font-size: 1rem;
    border: ${props => props.theme.form.input['border-none']};
    height: ${props => props.theme.form.input.height};
    &:active,
    &:focus {
      outline: none;
    }
    display: inline-block;
    padding: 0.3rem 2rem 0.3rem 1rem;
    margin: 0;
    box-sizing: ${props => props.theme.global['box-sizing']};
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
    background-color: ${props => props.theme.colors['neutral-light']};
    border: ${props => props.theme.form.input['border-none']};
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

// @todo Replace use of this temp solution with SmartGrid
export const TwoUp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.25rem;
  && > * {
    width: 48%;
  }
`;

export const SelectWrapper = styled.div`
  display: inline-block;
  height: ${props => props.theme.form.input.height};
  overflow: hidden;
  background-color: ${props => props.theme.colors['neutral-light']};
  font-size: ${props => props.theme.form.input['font-size']};
  border: ${props => props.theme.form.input['border-none']};
  > select {
    background-color: ${props => props.theme.colors['neutral-light']};
    font-size: ${props => props.theme.form.input['font-size']};
    border: ${props => props.theme.form.input['border-none']};
    height: ${props => props.theme.form.input.height};
    padding: ${props =>
      props.theme.form.select
        .padding}; /* If you add too much padding here, the options won't show in IE */
    &:active,
    &:focus {
      outline: none;
    }
  }
`;

export const TextInputWrapper = styled.div`
  > input,
  > textarea {
    box-sizing: border-box;
    padding: ${props => props.theme.form.input.padding};
    border: ${props => props.theme.form.input.border};
    background-color: white;
    font-size: ${props => props.theme.form.input['font-size']};
    width: 100%;
  }
  > input {
    height: ${props => props.theme.form.input.height};
  }
`;

export const RadioInputWrapper = styled.div`
  .field-radio-group.field-radio-group {
    height: unset;
  }
  input {
    margin-right: 8px;
    + span {
      font-size: ${props => props.theme.form.input['font-size']};
    }
  }
`;

export const CheckboxInputWrapper = styled.div`
  p {
    display: none;
  }
  label {
    height: ${props => props.theme.form.input.height};
    display: flex;
    align-items: center;
  }
  input {
    margin-right: 8px;
    + span {
      font-size: ${props => props.theme.form.input['font-size']};
    }
  }
`;

export const FormIconButton = styled.div`
  display: inline-block;
  width: 21px;
  height: 21px;
  background-size: contain;
  position: relative;
  cursor: ${props => (props.active ? 'pointer' : 'auto')};
  &::after {
    background: ${props =>
      props.backgroundImage ? props.backgroundImage : ''};
    background-size: contain;
    opacity: ${props => (props.active ? 1 : 0.25)};
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
  }
`;

export const FormIconTray = styled.div`
  box-sizing: border-box;
  border: ${props => props.theme.form.border};
  display: inline-flex;
  padding: ${props => props.theme.form.padding};
  margin-top: 1rem;
`;

export const FormArrayItem = styled.div`
  margin: 0.75rem 0;
  &:last-child {
    margin-bottom: 0;
  }
  .field {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  & > * + * {
    //margin-left: 0.25rem;
  }
  &:not(:last-child) {
    padding-bottom: 0.75rem;
    border-bottom: 1px solid lightgrey;
  }
`;

export const BlockQuoteWrapper = styled.blockquote`
  border: ${props => props.theme.blockquote.border};
  border-left: ${props => props.theme.blockquote['border-left']};
  padding: ${props => props.theme.blockquote.padding};
  position: relative;
  margin: ${props => props.theme.blockquote.margin};
  footer {
    font-size: 0.8em;
    color: ${props => props.theme.colors.color.gray.light};
    margin-top: 0.5rem;
  }
  ::before {
    content: '\\201C'; /*Unicode for Left Double Quote*/
    width: ${props => props.theme.blockquote.glyph.width};
    /*Font*/
    font-family: ${props => props.theme.blockquote.glyph.font};
    font-size: ${props => props.theme.blockquote.glyph.size};
    opacity: ${props => props.theme.blockquote.glyph.opacity};
    font-weight: bold;
    color: ${props => props.theme.blockquote.glyph.color};

    /*Positioning*/
    position: absolute;
    left: 0px;
    top: -30px;
  }
  ::after {
    content: '\\201D'; /*Unicode for Right Double Quote*/
    width: ${props => props.theme.blockquote.glyph.width};
    font-family: ${props => props.theme.blockquote.glyph.font};
    font-size: ${props => props.theme.blockquote.glyph.size};
    opacity: ${props => props.theme.blockquote.glyph.opacity};
    font-weight: bold;
    color: ${props => props.theme.blockquote.glyph.color};
    position: absolute;
    right: 10px;
    bottom: -85px;
  }
`;

export const TypeToFilterInputWrapper = styled.div`
  display: flex;
  > input,
  > textarea {
    box-sizing: border-box;
    padding: ${props => props.theme.form.input.padding};
    border: ${props => props.theme.form.input.border};
    background-color: white;
    font-size: ${props => props.theme.form.input['font-size']};
    width: 100%;
  }
  > input {
    height: ${props => props.theme.form.input.height};
  }
`;

export const TypeToFilter = styled.div`
  > .eyebrow {
    margin-top: 0;
    font-weight: bold;
  }
  position: relative;
  margin-bottom: 2rem;
`;

export const ClearFilterButton = styled.div`
  border: solid 1px ${props => props.theme.form.border};
  border-left: none;
  height: ${props => props.theme.form.input.height};
  width: 33px;
  flex-shrink: 0;
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  > i {
    opacity: 0.5;
  }
`;
