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
  min-height: calc(100vh - 229px);
`;

const SiteFooter = styled.div`
  background-color: #16394b;
  color: white;
  && a {
    color: white;
  }
`;

const Site = props => (
    <div>
      <div className="site__header">
        <Header siteTitle={'Crux'} />
      </div>
      <SiteMain>{props.children}</SiteMain>
      <SiteFooter>
        <Footer />
      </SiteFooter>
    </div>
);

Site.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Site;
