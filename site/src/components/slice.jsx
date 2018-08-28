import React from 'react';
import PropTypes from 'prop-types';
import { FormIconButton, FormIconTray } from '@basalt/bedrock-atoms';
import { FaChevronDown, FaChevronUp, FaTrashAlt, FaEdit } from 'react-icons/fa';
import styled from 'styled-components';
import Twig from './twig';

const PlaygroundIcon = styled(FormIconButton)`
  display: block;
`;

const PlaygroundIconWrapper = styled(FormIconTray)`
  display: block;
  height: 100%;
  text-align: center;
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
  <div
    style={{
      display: 'flex',
      border: `dotted 1px ${isBeingEdited ? 'blue' : '#ccc'}`,
    }}
  >
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

    <Twig template={template} data={data} isResizable={false} />
  </div>
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
