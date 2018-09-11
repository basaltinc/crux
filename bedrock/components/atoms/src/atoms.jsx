import React from 'react';
import styled from 'styled-components';

export * from './html-tags';
export * from './inputs-and-forms';
export * from './status-message';
export * from './select';
export * from './type-to-filter';

// Checkerboard background, used in demo stages
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

// TwoUp is a simple two item flexbox horizontal layout
export const TwoUp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.25rem;
  && > * {
    width: 48%;
  }
`;
