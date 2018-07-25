import React from 'react';
import PropTypes from 'prop-types';

import Site from '../templates/site';

import './page.css';

// @todo Evan is working on a better way to pull in styles
import '../../../build/assets/style.css'; // eslint-disable-line

const Page = props => {
  let mainClassName = props.className ? 'page '.concat(props.className) : 'page';
  return (
    <Site>
      <main className={mainClassName}>
        <div className="page__content">
          {props.children}
        </div>
        {props.sidebarOne && (
          <div className="page__sidebar-one">
            {props.sidebarOne}
          </div>
        )}
        {props.sidebarTwo && (
          <div className="page__sidebar-two">
            {props.sidebarTwo}
          </div>
        )}
      </main>
    </Site>
  );
}


Page.propTypes = {
  children: PropTypes.node.isRequired,
  sidebarOne: PropTypes.node,
  sidebarTwo: PropTypes.node,
};

export default Page;

