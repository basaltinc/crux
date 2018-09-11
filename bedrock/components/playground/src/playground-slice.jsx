import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import {
  FaChevronDown,
  FaChevronUp,
  FaTrashAlt,
  FaEdit,
  FaArrowsAlt,
} from 'react-icons/fa';
import Twig from '../../../../site/src/components/twig/twig';
import { DragTypes } from '../../../../site/config';
import {
  PlaygroundIcon,
  PlaygroundIconWrapper,
  PlaygroundSliceWrapper,
} from './playground.styles';

const PlaygroundSlice = ({
  moveUp,
  moveDown,
  deleteMe,
  showEditForm,
  isBeingEdited,
  isFirst,
  isLast,
  template,
  data,
  hasVisibleControls,
  isChanged,
  connectDragSource,
  connectDropTarget,
}) =>
  connectDragSource(
    connectDropTarget(
      <div>
        <PlaygroundSliceWrapper
          active={isBeingEdited}
          hasVisibleControls={hasVisibleControls}
          isChanged={isChanged}
        >
          <PlaygroundIconWrapper
            className="ei-content-block__button-tray"
            hasVisibleControls={hasVisibleControls}
          >
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
            <PlaygroundIcon>
              <FaArrowsAlt />
            </PlaygroundIcon>
          </PlaygroundIconWrapper>
          <div style={{ flexGrow: 1 }}>
            <Twig template={template} data={data} isResizable={false} />
          </div>
        </PlaygroundSliceWrapper>
      </div>,
    ),
  );

PlaygroundSlice.defaultProps = {
  data: {},
};

PlaygroundSlice.propTypes = {
  template: PropTypes.string.isRequired,
  data: PropTypes.object, // eslint-disable-line react/no-unused-prop-types
  showEditForm: PropTypes.func.isRequired,
  deleteMe: PropTypes.func.isRequired,
  moveUp: PropTypes.func.isRequired,
  moveDown: PropTypes.func.isRequired,
  isBeingEdited: PropTypes.bool.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  hasVisibleControls: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isChanged: PropTypes.bool.isRequired,
};

const sliceSource = {
  beginDrag(props) {
    const x = {
      id: props.id,
      index: props.index,
      templateName: props.template,
      hasVisibleControls: props.hasVisibleControls,
    };
    console.log('beginDrag', x);
    return x;
  },
  endDrag(props, monitor) {
    const didDrop = monitor.didDrop();
    const dropResult = monitor.getDropResult();
    console.log('endDrag', { didDrop, dropResult });
  },
  // canDrag(props, monitor) {
  //   return true;
  // },
};

const sliceTarget = {
  hover(props, monitor, component) {
    if (!component) {
      return null;
    }

    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    // eslint-disable-next-line
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    console.log('moveSlice()', { dragIndex, hoverIndex });
    props.moveSlice(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
};

// Sending our `PlaygroundSlice` component through two Higher Order Components:
// HOC 1: Makes Draggable - http://react-dnd.github.io/react-dnd/docs-drag-source.html
const DraggablePlaygroundSlice = DragSource(
  DragTypes.SLICE,
  sliceSource,
  // what this returns is passed into Component as `props`
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(), // used to wrap an element to make draggable
    isDragging: monitor.isDragging(),
  }),
)(PlaygroundSlice); // <- HOC takes in a component here

// HOC 2: Makes Droppable - http://react-dnd.github.io/react-dnd/docs-drop-target.html
const DroppableDraggablePlaygroundSlice = DropTarget(
  DragTypes.SLICE,
  sliceTarget,
  // what this returns is passed into Component as `props`
  connect => ({
    connectDropTarget: connect.dropTarget(), // used to wrap an element to make droppable
  }),
)(DraggablePlaygroundSlice); // <- HOC takes in a component here

// Now it's Draggable & Droppable (i.e. re-arrangable)
export default DroppableDraggablePlaygroundSlice;
