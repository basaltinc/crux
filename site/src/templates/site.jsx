import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';

import '../global.css'; // eslint-disable-line
import ErrorCatcher from "../bedrock/components/error-catcher"; // eslint-disable-line

const SiteMain = styled.div`
  display: flex;
  justify-content: center;
`;

const Site = props => (
  <ErrorCatcher>
    <div>
      <div className="site__header">
        <Header siteTitle={'Crux'} />
      </div>
      <SiteMain>{props.children}</SiteMain>
      <div className="site__footer">
        <Footer />
      </div>
    </div>
  </ErrorCatcher>
);

Site.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Site;
