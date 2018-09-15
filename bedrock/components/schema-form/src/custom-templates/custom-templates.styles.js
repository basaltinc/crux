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
      }
    }
  }
  padding: 0;
  margin-top: ${props => props.theme.spacing.m};
  > label {
    display: block;
    color: ${props => props.theme.form.label.color};
    font-size: ${props => props.theme.form.label.font_size};
    font-weight: bold;
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

export const IconWrapper = styled.div`
  position: relative;
  display: inline-block;
  span {
    display: block;
    padding: 0.25rem 0.75rem;
    position: absolute;
    background-color: grey;
    color: white;
    font-weight: 100;
    opacity: 0;
    white-space: pre;
    top: -36px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -10;
    &:after {
      border-color: grey transparent transparent transparent;
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 7px 7px 0 7px;
      bottom: -7px;
      margin-left: -5px;
      left: 50%;
    }
  }
  ${InfoIcon}:hover + span {
    opacity: 1;
  }
`;
