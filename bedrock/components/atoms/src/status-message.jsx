import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// @todo pull into Bedrock theming vars
const statusColorSets = {
  info: {
    text: '#004085',
    bg: '#cce5ff',
    border: '#b8daff',
  },
  success: {
    text: '#155724',
    bg: '#d4edda',
    border: '#c3e6cb',
  },
  warning: {
    text: '#f5c6cb',
    bg: '#fff3cd',
    border: '#ffeeba',
  },
  error: {
    text: '#721c24',
    bg: '#f8d7da',
    border: '#f5c6cb',
  },
};

const StatusMessageWrapper = styled.aside`
  padding: ${({ theme }) =>
    `${theme.globals.spacing.s} ${theme.globals.spacing.m}`};
  margin-bottom: ${({ theme }) => theme.globals.spacing.m};
  border: solid 1px ${({ type }) => statusColorSets[type].border};
  background-color: ${({ type }) => statusColorSets[type].bg};
  color: ${({ type }) => statusColorSets[type].color};
`;

export function StatusMessage(props) {
  return (
    <StatusMessageWrapper type={props.type}>
      <p>{props.message}</p>
    </StatusMessageWrapper>
  );
}

StatusMessage.defaultProps = {
  type: 'info',
};

StatusMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
};
