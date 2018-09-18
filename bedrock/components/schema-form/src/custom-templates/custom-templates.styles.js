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
  margin: ${props => props.theme.spacing.m} ${props => props.theme.spacing.m}
    ${props => props.theme.spacing.m} 0;
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
    position: absolute;
    min-width: 150px;
    text-align: center;
    padding: 0.5rem;
    visibility: hidden;
    opacity: 0;
    background: white;
    transition: all 0.25s cubic-bezier(0, 0, 0.2, 1);
    color: #484848;
    border: 1px solid #cecece;
    border-radius: 3px;
    font-weight: 500;
    box-shadow: 0 2px 1px #bcbcbc;
    z-index: 4;
    bottom: calc(100% + 1em);
    left: 50%;
    transform: translate3d(-50%, -15px, 0);
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      bottom: -0.5em;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      border-width: 0.5em 0.5em 0 0.5em;
      border-color: white transparent transparent transparent;
      -webkit-filter: drop-shadow(1px 2px 1px #bcbcbc);
      filter: drop-shadow(1px 2px 1px #bcbcbc);
    }
  }

  ${InfoIcon} {
    cursor: pointer;
    z-index: 5;
    &:hover ~ span {
      transform: translate3d(-50%, 0, 0);
      visibility: visible;
      opacity: 1;
    }
  }
`;
