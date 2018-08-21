import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  padding-left: 2rem;
`;

const SiteHeaderLink = styled(Link)`
  && {
    color: white;
    text-decoration: none;
  }
`;

const SiteHeaderNavLink = styled(NavLink)`
  && {
    color: white;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle, handleClick }) => (
  <SiteHeaderWrapper>
    <SiteHeaderBrandWrapper>
      <h3 style={{ margin: 0 }}>
        <SiteHeaderLink
          to="/"
          onClick={() => handleClick()}
          onKeyPress={() => handleClick()}
        >
          {siteTitle}
        </SiteHeaderLink>
      </h3>
    </SiteHeaderBrandWrapper>
    <div>
      <ul>
        <li>
          <SiteHeaderNavLink
            to="/about"
            onClick={() => handleClick()}
            onKeyPress={() => handleClick()}
          >
            Get Started
          </SiteHeaderNavLink>
        </li>
        <li>
          <SiteHeaderNavLink
            to="/visual-language"
            onClick={() => handleClick()}
            onKeyPress={() => handleClick()}
          >
            Visual Language
          </SiteHeaderNavLink>
        </li>
        <li>
          <SiteHeaderNavLink
            to="/patterns"
            onClick={() => handleClick()}
            onKeyPress={() => handleClick()}
          >
            Patterns
          </SiteHeaderNavLink>
        </li>
        <li>
          <SiteHeaderNavLink
            to="/resources"
            onClick={() => handleClick()}
            onKeyPress={() => handleClick()}
          >
            Resources
          </SiteHeaderNavLink>
        </li>
        <li>
          <a
            href="http://www.basalt.io"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <img
              src="/assets/images/logos/white-grey.svg"
              alt="Basalt"
              style={{ height: '1rem' }}
            />
          </a>
        </li>
      </ul>
    </div>
  </SiteHeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  handleClick: PropTypes.func,
};

Header.defaultProps = {
  siteTitle: 'Site Title',
  handleClick: () => console.log,
};

export default Header;
