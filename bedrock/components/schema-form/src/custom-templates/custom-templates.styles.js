import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa';

export const CustomFieldWrapper = styled.div`
  .rjsf--inline > & {
    > div.custom-object {
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      > div.custom-object-item {
        padding: 0;
        flex-grow: 1;
      }
    }
  }
  .patterns-filters & {
    &.field-object {
      > div.custom-object {
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        > div.custom-object-item {
          padding: 0;
          flex-grow: 0.2;
        }
      }
    }
  }
  padding: 0;
  margin: ${props => props.theme.spacing.m} ${props => props.theme.spacing.m}
    ${props => props.theme.spacing.m} 0;
  .form-group {
    margin: 0.25rem 0.25rem 0.5rem 0;
  }
  > label {
    display: block;
    color: ${props => props.theme.label.color};
    font-size: ${props => props.theme.label.fontSize};
    font-weight: ${props => props.theme.label.fontWeight};
  }
  &.field-array {
    .field-array.form-group {
      margin-left: 3rem;
    }
    position: relative;
    .n-of-x {
      position: absolute;
      font-size: 0.75rem;
      right: 0.5rem;
      padding: 0.5rem 0.5rem 0 0;
    }
    .field-object > label {
      font-size: calc(${props => props.theme.globals.fontSize} * 0.88);
      font-weight: bold;
      color: black;
    }
    > label {
      display: none;
    }
  }
  .field-radio-group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: ${props => props.theme.input.height};
    font-size: 18px;
    background-color: transparent;
    > div {
      display: inline-block;
    }
    span {
      display: flex;
      align-items: center;
    }
    .radio {
      margin-right: 13.5px;
    }
    input {
      margin-right: 8px;
    }
  }
`;

export const InfoIcon = styled(FaInfoCircle)`
  margin-left: 3px;
  color: grey;
`;
