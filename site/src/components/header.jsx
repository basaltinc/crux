import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import './header.css';

const Header = ({ siteTitle }) => (
  <nav>
    <div className="logo">
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
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/docs"
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
            to="/design-system"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Design System
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
