import React from 'react';
import PropTypes from 'prop-types';
import { BedrockContextConsumer } from '@basalt/bedrock-core';
import {
  SiteHeaderLink,
  Hamburger,
  MobileNav,
  SiteHeaderNavLink,
  SiteNav,
  X,
} from './header.styles';

class Header extends React.Component {
  static navigationLinks() {
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
          <SiteHeaderNavLink to="/examples">Examples</SiteHeaderNavLink>
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

  /* eslint-disable */
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ mobileNavVisible: false });
    }
  }
  /* eslint-enable */

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  handleNavClick() {
    this.setState(prevState => ({
      mobileNavVisible: !prevState.mobileNavVisible,
    }));
  }

  renderMobileNav() {
    if (this.state.mobileNavVisible) {
      return Header.navigationLinks();
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
        {Header.navigationLinks()}
      </div>
    );
  }

  render() {
    return (
      <BedrockContextConsumer>
        {context => (
          <SiteNav>
            <h3 style={{ margin: 0 }}>
              <SiteHeaderLink to="/">
                {context.settings.site.title}
              </SiteHeaderLink>
            </h3>
            {this.renderNavigation()}
          </SiteNav>
        )}
      </BedrockContextConsumer>
    );
  }
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Header;
