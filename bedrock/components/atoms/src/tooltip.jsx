import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  span {
    position: absolute;
    min-width: 150px;
    text-align: center;
    padding: 0.5rem;
    visibility: hidden;
    opacity: 0;
    background: ${props => props.bg_color};
    transition: all 0.25s cubic-bezier(0, 0, 0.2, 1);
    color: ${props => props.text_color};
    border: 1px solid #cecece;
    border-radius: 3px;
    font-weight: 500;
    box-shadow: 0 2px 1px #bcbcbc;
    z-index: 4;
    height: fit-content;
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
    }
  }
  // stylelint-disable selector-type-no-unknown
  // stylelint-disable property-no-vendor-prefix
  *:first-child {
    cursor: pointer;
    z-index: 5;
    &:hover ~ span {
      visibility: visible;
      opacity: 1;
    }
  }
  &[data-position='top'] {
    span {
      bottom: calc(100% - 2px);
      left: 50%;
      transform: translate3d(-50%, -15px, 0);
      &:after {
        bottom: -0.5em;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        border-width: 0.5em 0.5em 0 0.5em;
        border-color: white transparent transparent transparent;
        -webkit-filter: drop-shadow(1px 2px 1px #bcbcbc);
        filter: drop-shadow(1px 2px 1px #bcbcbc);
      }
    }
    *first-child:hover ~ span {
      transform: translate3d(-50%, 0, 0);
      visibility: visible;
      opacity: 1;
    }
  }
  &[data-position='bottom'] {
    span {
      top: calc(100% + 1.5em);
      left: 50%;
      transform: translate3d(-50%, -15px, 0);
      &:after {
        top: -0.5em;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        border-width: 0 0.5em 0.5em 0.5em;
        border-color: transparent transparent white transparent;
        -webkit-filter: drop-shadow(1px -1px 1px #bcbcbc);
        filter: drop-shadow(1px -1px 1px #bcbcbc);
      }
    }
    *first-child:hover ~ span {
      transform: translate3d(-50%, 0, 0);
      visibility: visible;
      opacity: 1;
    }
  }
  &[data-position='left'] {
    span {
      top: 50%;
      right: calc(100% + 1.5em);
      transform: translate3d(15px, -50%, 0);
      &:after {
        top: 50%;
        right: -0.5em;
        transform: translate3d(0, -50%, 0);
        border-width: 0.5em 0 0.5em 0.5em;
        border-color: transparent transparent transparent white;
        -webkit-filter: drop-shadow(2px 2px 1px #bcbcbc);
        filter: drop-shadow(2px 2px 1px #bcbcbc);
      }
    }
    *first-child:hover ~ span {
      transform: translate3d(0, -50%, 0);
      visibility: visible;
      opacity: 1;
    }
  }
  &[data-position='right'] {
    span {
      top: 50%;
      left: 100%;
      transform: translate3d(15px, -50%, 0);
      &:after {
        top: 50%;
        left: -0.5em;
        transform: translate3d(0, -50%, 0);
        border-width: 0.5em 0.5em 0.5em 0;
        border-color: transparent white transparent transparent;
        -webkit-filter: drop-shadow(-2px 2px 1px #bcbcbc);
        filter: drop-shadow(-2px 2px 1px #bcbcbc);
      }
    }
    *first-child:hover ~ span {
      transform: translate3d(0, -50%, 0);
      visibility: visible;
      opacity: 1;
    }
  }
  // stylelint-enable selector-type-no-unknown
  // stylelint-enable property-no-vendor-prefix
`;

export function Tooltip(props) {
  return (
    <TooltipWrapper
      bg_color={props.bg_color}
      text_color={props.text_color}
      data-position={props.position}
    >
      {props.children}
      <span>{props.tooltipContent}</span>
    </TooltipWrapper>
  );
}

Tooltip.defaultProps = {
  bg_color: 'white',
  text_color: '#484848',
  position: 'top',
};

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  tooltipContent: PropTypes.string.isRequired,
  bg_color: PropTypes.string,
  text_color: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
};
