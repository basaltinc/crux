import React, { Component } from 'react';
import Link from 'gatsby-link';
import Page from '../../templates/page';
import Spinner from '../../components/spinner';
import { apiUrlBase } from '../../../config';
import mediaBlockImage from '../../../../images/component-thumbnails/media-block.svg';
import mediaTileImage from '../../../../images/component-thumbnails/media-tile.svg';
import heroImage from '../../../../images/component-thumbnails/hero.svg';

// @todo refactor
const images = {
  hero: heroImage,
  'media-tile': mediaTileImage,
  'media-block': mediaBlockImage,
};

class PatternsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patterns: [],
      ready: false,
    };
  }

  componentDidMount() {
    window
      .fetch(`${apiUrlBase}/patterns/components`)
      .then(res => res.json())
      .then(patterns => {
        this.setState({ patterns, ready: true });
      });
  }

  render() {
    let content;
    if (!this.state.ready) {
      content = <Spinner />;
    } else {
      const items = this.state.patterns.map(pattern => {
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
      });
      content = (
        <ul
          className="smart-grid u-crux-pattern-grid"
          data-row-items-small="2"
          data-row-items-medium="3"
        >
          {items}
        </ul>
      );
    }
    return (
      <Page>
        <h2>Welcome to the Design System!</h2>
        {content}
      </Page>
    );
  }
}

export default PatternsPage;
