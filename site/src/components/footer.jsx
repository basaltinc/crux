import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-top: 1px solid #000000;
`;

const FooterMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const FooterMenuItem = styled.li`
  margin-right: 10px;
`;

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
