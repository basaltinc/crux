import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';
import './site.css';
// @todo Evan is working on a better way to pull in styles
import '../../../build/assets/style.css'; // eslint-disable-line

const Site = props => (
  <div className="site">
    <div className="site__header u-full-width">
      <Header siteTitle={'Crux'} />
    </div>
    <div className="site__main">{props.children}</div>
    <div className="site__footer u-full-width">
      <Footer />
    </div>
  </div>
);

Site.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Site;
