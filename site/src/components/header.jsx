import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const SiteNav = styled.nav`
  background: #16394b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  font-family: AvenirMedium, Helvetica, sans-serif;
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

const MobileNav = styled.div`
  display: block;
  ul {
    background-color: #16394b;
    z-index: 3;
    display: block;
    text-align: right;
    position: absolute;
    right: 0;
    top: 50px;
    padding: 2rem 1rem 0 1rem;
  }
  li {
    padding: 1rem 1rem 1rem 8rem;
    border-top: solid 1px white;
  }
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

const Hamburger = styled(FaBars)`
  color: white;
  float: right;
  font-size: 1.5rem;
`;

const X = styled(FaTimes)`
  color: white;
  float: right;
  font-size: 1.5rem;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false,
    };
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  handleNavClick() {
    if (!this.state.mobileNavVisible) {
      this.setState({ mobileNavVisible: true });
    } else {
      this.setState({ mobileNavVisible: false });
    }
  }

  navigationLinks() {
    return (
      <ul>
        <li>
          <SiteHeaderNavLink to="/about">Get Started</SiteHeaderNavLink>
        </li>
        <li>
          <SiteHeaderNavLink to="/visual-language">
            Visual Language
          </SiteHeaderNavLink>
        </li>
        <li>
          <SiteHeaderNavLink to="/patterns">Patterns</SiteHeaderNavLink>
        </li>
        <li>
          <SiteHeaderNavLink to="/resources">Resources</SiteHeaderNavLink>
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
    );
  }

  renderMobileNav() {
    if (this.state.mobileNavVisible) {
      return this.navigationLinks();
    }
  }
  
  renderNavigation() {
    if (this.state.windowWidth <= 900) {
      return (
        <MobileNav>
          {this.renderMobileNav()}
          {this.state.mobileNavVisible && <X onClick={this.handleNavClick} />}
          {!this.state.mobileNavVisible && (
            <Hamburger onClick={this.handleNavClick} />
          )}
        </MobileNav>
      );
    }
    return (
      <div key={7} className="nav_menu">
        {this.navigationLinks()}
      </div>
    );
  }

  render() {
    return (
      <SiteNav>
        <h3 style={{ margin: 0 }}>
          <SiteHeaderLink to="/">{this.props.siteTitle}</SiteHeaderLink>
        </h3>
        {this.renderNavigation()}
      </SiteNav>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Site Title',
};

export default Header;
