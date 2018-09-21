import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SmartGrid from '@basalt/bedrock-smart-grid';
import {
  PatternGridItem,
  PatternGridItemDescription,
  PatternGridItemThumb,
  PatternGridItemTitle,
} from './pattern-grid.styles';

export default function PatternGrid(props) {
  const components = props.patterns;
  return (
    <SmartGrid
      className="pattern-grid-wrapper"
      row-items-xsmall={2}
      row-items-large={3}
      row-items-xlarge={4}
    >
      {components.map(pattern => (
        <PatternGridItem key={pattern.id}>
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
    </SmartGrid>
  );
}

PatternGrid.propTypes = {
  patterns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
};
