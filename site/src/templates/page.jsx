import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';

const Page = props => (
  <div className="app">
    <Header className="app__header" siteTitle={'Basalt Design System'} />
    <div className="app__body">
      {props.children}
    </div>
    <Footer />
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;

