import React, { Component } from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Spinner from '../bedrock/components/spinner';
import './component-board.css';

import mediaBlockImage from '../../../images/component-thumbnails/media-block.svg';
import mediaTileImage from '../../../images/component-thumbnails/media-tile.svg';
import heroImage from '../../../images/component-thumbnails/hero.svg';

// @todo refactor
const images = {
  hero: heroImage,
  'media-tile': mediaTileImage,
  'media-block': mediaBlockImage,
};

export default function ComponentsBoard(props) {
  if (!props.ready) {
    return <Spinner />;
  }
  return (
    <ul
      className="smart-grid u-crux-pattern-grid"
      data-row-items-small="2"
      data-row-items-medium="3"
    >
      {props.patterns.map(pattern => {
        const image = images[pattern.id];
        return (
          <li
            key={pattern.id}
            className="u-crux-pattern-grid__item u-crux-pattern-grid__item--component"
          >
            <Link to={pattern.path}>
              {image && (
                <img
                  src={image}
                  alt=""
                  className="u-crux-pattern-grid__item-thumb"
                />
              )}
              <span className="u-crux-pattern-grid__item-title">
                {pattern.title}
              </span>
              <div className="u-crux-pattern-grid__item-description">
                {pattern.schema.description}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

ComponentsBoard.propTypes = {};
