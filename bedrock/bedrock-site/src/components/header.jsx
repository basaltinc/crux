import React from 'react';
import PropTypes from 'prop-types';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import {
  SiteHeaderLink,
  Hamburger,
  MobileNav,
  SiteHeaderNavLink,
  SiteNav,
  X,
} from './header.styles';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false,
    };
    this.handleNavClick = this.handleNavClick.bind(this);
    this.renderNavigation = this.renderNavigation.bind(this);
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

  static renderLinks(context) {
    const { settings, sections } = context;
    return (
      <ul>
        <li>
          <SiteHeaderNavLink to="/about">Get Started</SiteHeaderNavLink>
        </li>
        <li>
          <SiteHeaderNavLink to="/design-tokens">
            Design Tokens
          </SiteHeaderNavLink>
        </li>
        <li>
          <SiteHeaderNavLink to="/patterns">Patterns</SiteHeaderNavLink>
        </li>
        <li>
          <SiteHeaderNavLink to="/examples">Examples</SiteHeaderNavLink>
        </li>
        {sections.map(section => (
          <li key={section.id}>
            <SiteHeaderNavLink to={section.items[0].path}>
              {section.title}
            </SiteHeaderNavLink>
          </li>
        ))}
        {settings.parentBrand && (
          <li>
            <a
              href={settings.parentBrand.homepage}
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              {(settings.parentBrand.logo && (
                <img
                  src={settings.parentBrand.logo}
                  alt={settings.parentBrand.title}
                  style={{ height: '1rem' }}
                />
              )) ||
                settings.parentBrand.title}
            </a>
          </li>
        )}
      </ul>
    );
  }

  renderNavigation() {
    // If Mobile
    if (this.state.windowWidth <= 950) {
      return this.state.mobileNavVisible ? (
        <MobileNav>
          {Header.renderLinks(this.props.context)}
          <X onClick={this.handleNavClick} />
        </MobileNav>
      ) : (
        <Hamburger onClick={this.handleNavClick} />
      );
    }
    // If Desktop
    return Header.renderLinks(this.props.context);
  }

  render() {
    return (
      <SiteNav>
        <h3 style={{ margin: 0 }}>
          <SiteHeaderLink to="/">
            {this.props.context.settings.site.title}
          </SiteHeaderLink>
        </h3>
        {this.renderNavigation()}
      </SiteNav>
    );
  }
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  context: contextPropTypes.isRequired,
};

export default connectToContext(Header);
