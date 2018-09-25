import styled from 'styled-components';
import { FaInfoCircle } from 'react-icons/fa';

export const CustomFieldWrapper = styled.div`
  .rjsf--inline > & {
    > div {
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      > div {
        padding: 0;
        flex-grow: 1;
      }
    }
  }
  .patterns-filters & {
    &.field-object {
      > div {
        display: flex;
        justify-content: left;
        flex-wrap: wrap;
        > div {
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
    color: ${props => props.theme.form.label.color};
    font-size: ${props => props.theme.form.label.font_size};
    //font-weight: bold;
  }
  &.field-array {
    .field-object > label {
      font-size: ${props => props.theme.fonts.sizes.s};
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
    height: ${props => props.theme.form.input.height};
    font-size: 18px;
    background-color: white;
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
