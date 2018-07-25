import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Site from '../templates/site';

import './page.css';

// @todo Evan is working on a better way to pull in styles
import '../../../build/assets/style.css'; // eslint-disable-line

const Page = props => (
  <Site>
    <main
      className={classNames('page', {
        'page--has-sidebar-one': props.sidebarOne,
        'page--has-sidebar-two': props.sidebarTwo,
        [`page--${props.className}`]: props.className,
      })}
    >
      <div className="page__content">{props.children}</div>
      {props.sidebarOne && (
        <div className="page__sidebar-one">{props.sidebarOne}</div>
      )}
      {props.sidebarTwo && (
        <div className="page__sidebar-two">{props.sidebarTwo}</div>
      )}
    </main>
  </Site>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  sidebarOne: PropTypes.node,
  sidebarTwo: PropTypes.node,
};

Page.defaultProps = {
  className: null,
  sidebarOne: null,
  sidebarTwo: null,
};

export default Page;
