import React from 'react';
import PropTypes from 'prop-types';
import { FormIconButton, FormIconTray } from '@basalt/bedrock-atoms';
import { FaChevronDown, FaChevronUp, FaTrashAlt, FaEdit } from 'react-icons/fa';
import styled from 'styled-components';
import Twig from './twig';

const PlaygroundIcon = styled(FormIconButton)`
  display: block;
  transition: all 0.3s ease;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  &:hover,
  &:active {
    cursor: ${props => (props.disabled ? '' : 'pointer')};
  }
  > svg {
    width: 100%;
    height: 100%;
  }
`;

const PlaygroundIconWrapper = styled(FormIconTray)`
  display: block;
  height: 100%;
  text-align: center;
  padding: 0.5rem;
`;

const PlaygroundSliceWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  border: solid 1px ${props => (props.active ? '#e1c933' : 'white')};
  ${PlaygroundIconWrapper} {
    margin-left: 1rem;
  }
`;

const Slice = ({
  moveUp,
  moveDown,
  deleteMe,
  showEditForm,
  isBeingEdited,
  isFirst,
  isLast,
  template,
  data,
}) => (
  <PlaygroundSliceWrapper active={isBeingEdited}>
    <PlaygroundIconWrapper className="ei-content-block__button-tray">
      <PlaygroundIcon
        onKeyPress={() => !isFirst && moveUp()}
        onClick={() => !isFirst && moveUp()}
        role="button"
        aria-label="move item up"
        tabIndex="0"
        disabled={isFirst}
      >
        <FaChevronUp fill={isFirst ? 'lightgrey' : 'black'} />
      </PlaygroundIcon>
      <PlaygroundIcon
        onKeyPress={() => !isLast && moveDown()}
        onClick={() => !isLast && moveDown()}
        role="button"
        aria-label="move item down"
        tabIndex="0"
        disabled={isLast}
      >
        <FaChevronDown fill={isLast ? 'lightgrey' : 'black'} />
      </PlaygroundIcon>
      <PlaygroundIcon
        onKeyPress={showEditForm}
        onClick={showEditForm}
        role="button"
        aria-label="being editing"
        tabIndex="0"
      >
        <FaEdit />
      </PlaygroundIcon>
      <PlaygroundIcon
        onKeyPress={deleteMe}
        onClick={deleteMe}
        role="button"
        aria-label="delete component"
        tabIndex="0"
      >
        <FaTrashAlt />
      </PlaygroundIcon>
    </PlaygroundIconWrapper>
    <div style={{ flexGrow: 1 }}>
      <Twig template={template} data={data} isResizable={false} />
    </div>
  </PlaygroundSliceWrapper>
);

Slice.defaultProps = {
  data: {},
};

Slice.propTypes = {
  template: PropTypes.string.isRequired,
  data: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
  showEditForm: PropTypes.func.isRequired,
  deleteMe: PropTypes.func.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  isBeingEdited: PropTypes.bool.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};

export default Slice;
