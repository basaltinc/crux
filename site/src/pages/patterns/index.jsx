import React from 'react';
import Link from 'gatsby-link';
import Page from '../../templates/page';
// import Twig from '../../components/twig';
import { patterns } from '../../../data';

const PatternsPage = () => (
  <Page>
    <h2>Welcome to the Design System!</h2>
    <ul
      className="smart-grid u-crux-pattern-grid"
      data-row-items-small="2"
      data-row-items-medium="3"
    >
      {patterns.map(pattern => (
        <li
          key={pattern.id}
          className="u-crux-pattern-grid__item u-crux-pattern-grid__item--component"
        >
          <Link to={pattern.path}>
            <img
              src={pattern.image}
              alt=""
              className="u-crux-pattern-grid__item-thumb"
            />
            <span className="u-crux-pattern-grid__item-title">
              {pattern.title}
            </span>
            <div className="u-crux-pattern-grid__item-description">
              {pattern.data.desc}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Page>
);

export default PatternsPage;
