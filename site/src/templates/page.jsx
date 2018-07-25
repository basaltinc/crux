import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';
import './page.css';
// @todo Evan is working on a better way to pull in styles
import '../../../build/assets/style.css'; // eslint-disable-line

const Page = props => (
  <div className="site">
    <div className="site__header u-full-width">
      <Header siteTitle={'Crux'} />
    </div>
    <div className="site__body">
      {props.children}
    </div>
    <div className="site__footer u-full-width">
      <Footer />
    </div>
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;

