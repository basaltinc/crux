import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
  <nav
    style={{
      background: 'hsl(200, 55%, 19%)',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div>
      <ul>
        <li>
          <Link
            to="/doc"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Docs
          </Link>
        </li>
        <li>
          <Link
            to="/components"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Components
          </Link>
        </li>
        <li>
          <Link
            to="/foobar"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Foobar
          </Link>
        </li>
        <li>
          <Link
            to="http://basalt.io"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Basalt
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: 'Site Title',
};

export default Header;
