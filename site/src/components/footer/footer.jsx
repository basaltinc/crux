import React from 'react';
import { Link } from 'react-router-dom';
import { FooterWrapper, FooterMenu, FooterMenuItem } from './footer.styles';

const Footer = () => (
  <FooterWrapper>
    <FooterMenu>
      <FooterMenuItem>
        <a
          href="http://localhost:3042/apidoc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Docs
        </a>
      </FooterMenuItem>
      <FooterMenuItem>
        <a
          href="http://localhost:3042/jsdoc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JSDocs
        </a>
      </FooterMenuItem>
      <FooterMenuItem>
        <Link to="/sandbox">Sandbox</Link>
      </FooterMenuItem>
    </FooterMenu>
    <p>
      Copyright 2018 -{' '}
      <a href="http://basalt.io" target="_blank" rel="noopener noreferrer">
        Basalt
      </a>
    </p>
  </FooterWrapper>
);

export default Footer;
