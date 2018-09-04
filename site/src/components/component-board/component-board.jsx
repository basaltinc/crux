import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  PatternGrid,
  PatternGridItem,
  PatternGridItemDescription,
  PatternGridItemThumb,
  PatternGridItemTitle,
} from './component-board.styles';

export default function ComponentsBoard(props) {
  const components = props.patterns;
  return (
    <PatternGrid
      className="smart-grid"
      data-row-items-small="1"
      data-row-items-medium="2"
      data-row-items-large="3"
    >
      {components.map(pattern => (
        <PatternGridItem
          key={pattern.id}
          className="u-crux-pattern-grid__item--component"
        >
          <Link
            to={
              pattern.path ? pattern.path : `/patterns/components/${pattern.id}`
            }
          >
            <PatternGridItemThumb
              src={`/assets/images/pattern-thumbnails/${pattern.id}.svg`}
              alt=""
            />
            <PatternGridItemTitle>{pattern.title}</PatternGridItemTitle>
            <PatternGridItemDescription>
              {pattern.description}
            </PatternGridItemDescription>
          </Link>
        </PatternGridItem>
      ))}
    </PatternGrid>
  );
}

ComponentsBoard.propTypes = {
  patterns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
};
