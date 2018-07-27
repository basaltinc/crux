import React from 'react';
import Link from 'gatsby-link';

import './footer.css';

const Footer = () => (
  <footer className="footer">
    <ul className="footer-menu">
      <li className="footer-menu__item">
        <a
          href="http://localhost:3042/apidoc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Docs
        </a>
      </li>
      <li className="footer-menu__item">
        <a
          href="http://localhost:3042/jsdoc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JSDocs
        </a>
      </li>
      <li className="footer-menu__item">
        <Link to="/sandbox">Sandbox</Link>
      </li>
    </ul>
    <p>
      Copyright 2018 -{' '}
      <a href="http://basalt.io" target="_blank" rel="noopener noreferrer">
        Basalt
      </a>
    </p>
  </footer>
);

export default Footer;
