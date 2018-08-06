import React from 'react';
import Link from 'gatsby-link'; // eslint-disable-line
import PropTypes from 'prop-types';
import styled from 'styled-components';

import basalt from '../../../images/logos/white-grey.svg';

const SiteHeaderWrapper = styled.nav`
  background: #16394b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    li {
      padding-right: 20px;
      margin: 0;
    }
  }
`;

const SiteHeaderBrandWrapper = styled.div`
  padding-left: 20px;
`;

const SiteHeaderLink = styled(Link)`
  color: white !important; // needed to overwrite generic styles coming from the design system css cascade
  text-decoration: none !important;
`;

const Header = ({ siteTitle }) => (
  <SiteHeaderWrapper>
    <SiteHeaderBrandWrapper>
      <h3 style={{ margin: 0 }}>
        <SiteHeaderLink to="/">{siteTitle}</SiteHeaderLink>
      </h3>
    </SiteHeaderBrandWrapper>
    <div>
      {/* @todo clean this up; propagate these classnames */}
      <ul>
        <li>
          <SiteHeaderLink to="/get-started">Get Started</SiteHeaderLink>
        </li>
        <li>
          <SiteHeaderLink to="/visual-language">Visual Langauge</SiteHeaderLink>
        </li>
        <li>
          <SiteHeaderLink to="/patterns">Patterns</SiteHeaderLink>
        </li>
        <li>
          <SiteHeaderLink to="/about">About</SiteHeaderLink>
        </li>
        <li>
          <SiteHeaderLink to="/resources">Resources</SiteHeaderLink>
        </li>
        <li>
          <a
            href="http://www.basalt.io"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <img src={basalt} alt="Basalt" style={{ height: '1rem' }} />
          </a>
        </li>
      </ul>
    </div>
  </SiteHeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Site Title',
};

export default Header;
