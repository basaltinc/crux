import React from 'react';

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
      <li className="footer-menu__item">Nav 1</li>
      <li className="footer-menu__item">Nav 2</li>
      <li className="footer-menu__item">Nav 3</li>
      <li className="footer-menu__item">Nav 4</li>
      <li className="footer-menu__item">Nav 5</li>
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
