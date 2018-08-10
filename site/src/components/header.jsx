import React from 'react';
import { NavLink } from 'react-router-dom'; // eslint-disable-line
import PropTypes from 'prop-types';
import styled from 'styled-components';

import basalt from '../../../images/logos/white-grey.svg';

const SiteHeaderWrapper = styled.nav`
  background: #16394b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  font-family: AvenirMedium;
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    li {
      position: relative;
      padding-right: 45px;
      margin: 0;
    }
  }
  & a:hover {
    text-decoration: underline;
  }
  a[aria-current='page'] {
    font-weight: bold;
    &:before {
      color: #ffffff;
      content: '>';
      position: absolute;
      left: -15px;
    }
  }
`;

const SiteHeaderBrandWrapper = styled.div`
  padding-left: 20px;
`;

const SiteHeaderLink = styled(NavLink)`
  && {
    color: white;
    text-decoration: none;
  }
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
          <SiteHeaderLink to="/about">Get Started</SiteHeaderLink>
        </li>
        <li>
          <SiteHeaderLink to="/visual-language">Visual Language</SiteHeaderLink>
        </li>
        <li>
          <SiteHeaderLink to="/patterns">Patterns</SiteHeaderLink>
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
