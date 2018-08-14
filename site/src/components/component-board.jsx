import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Spinner from '../bedrock/components/spinner';

// @todo refactor
const images = {
  hero: '/assets/images/component-thumbnails/hero.svg',
  'media-tile': '/assets/images/component-thumbnails/media-tile.svg',
  'media-block': '/assets/images/component-thumbnails/media-block.svg',
};

const PatternGrid = styled.ul`
  margin: 50px;
  padding: 0;
  list-style-type: none;
  align-items: flex-start;
`;

const PatternGridItem = styled.li`
  background: #fff;
  position: relative;
  transition: all 0.3s ease-in-out;
  ${PatternGrid}:hover & {
    filter: blur(0.75px);
  }
  &:hover {
    filter: blur(0px) !important;
    z-index: 100;
  }
  > a:link,
  > a:visited {
    display: block;
    font-family: 'AvenirMedium', sans-serif;
    text-decoration: none;
    padding: 30px 30px 0;
    height: 100%;
    border: solid 1px #ccc;
    border-radius: var(--border-radius);
    text-align: center;
    transition: all 0.2s ease-in-out;
    position: relative;
    z-index: 100;
  }
  > a:hover {
    position: absolute;
    background: #fff;
    border-radius: var(--border-radius);
    border-color: var(--type-color--component);
    transform: scale(1.05);
    width: 100%;
    height: auto;
    z-index: 200;
  }
`;

const PatternGridItemThumb = styled.img`
  display: block;
  max-width: 250px;
  width: 100%;
  max-height: 110px;
  margin: 0 auto 15px;
  filter: grayscale(75%);
  transition: all 0.2s ease-in-out;
  ${PatternGridItem}:hover & {
    filter: grayscale(0%);
  }
`;

const PatternGridItemTitle = styled.span`
  color: #000;
  margin-bottom: -3px;
  border-bottom: 5px solid var(--type-color--component);
  display: inline-block;
  transition: all 0.2s ease-in-out;
`;

const PatternGridItemDescription = styled.div`
  font-family: 'AvenirLight', sans-serif;
  line-height: 1.25;
  font-size: 14px;
  color: #000;
  font-style: italic;
  padding: 25px 0 25px;
  max-width: 250px;
  margin: 0 auto;
  opacity: 0;
  height: 0;
  pointer-events: none;
  transition: all 0.1s ease-in-out;
  transform: scale(0.75);
  position: absolute;

  ${PatternGridItem} > a:hover & {
    opacity: 1;
    transform: scale(1);
    height: auto;
    position: relative;
  }
`;

export default function ComponentsBoard(props) {
  if (!props.ready) {
    return <Spinner />;
  }
  return (
    <PatternGrid
      className="smart-grid"
      data-row-items-small="2"
      data-row-items-medium="3"
    >
      {props.patterns.map(pattern => {
        const image = images[pattern.id];
        return (
          <PatternGridItem
            key={pattern.id}
            className="u-crux-pattern-grid__item--component"
          >
            <Link
              to={
                pattern.path
                  ? pattern.path
                  : `/patterns/components/${pattern.id}`
              }
            >
              {image && <PatternGridItemThumb src={image} alt="" />}
              <PatternGridItemTitle>{pattern.title}</PatternGridItemTitle>
              <PatternGridItemDescription>
                {pattern.description}
              </PatternGridItemDescription>
            </Link>
          </PatternGridItem>
        );
      })}
    </PatternGrid>
  );
}

ComponentsBoard.propTypes = {
  ready: PropTypes.bool.isRequired,
  patterns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
};
