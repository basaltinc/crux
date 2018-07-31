import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';

// @todo Evan is working on a better way to pull in styles
import '../../../build/assets/style.css'; // eslint-disable-line

const SiteMain = styled.div`
  display: flex;
  justify-content: center;
`

const Site = props => (
  <div className="site">
    <div className="site__header u-full-width">
      <Header siteTitle={'Crux'} />
    </div>
    <SiteMain>{props.children}</SiteMain>
    <div className="site__footer u-full-width">
      <Footer />
    </div>
  </div>
);

Site.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Site;
