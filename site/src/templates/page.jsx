import React from 'react';
import PropTypes from 'prop-types';

import Site from '../templates/site';

import './page.css';

// @todo Evan is working on a better way to pull in styles
import '../../../build/assets/style.css'; // eslint-disable-line

const Page = props => {
  const mainClassName = props.className
    ? 'page '.concat(props.className)
    : 'page';
  return (
    <Site>
      <main className={mainClassName}>
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
};

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
