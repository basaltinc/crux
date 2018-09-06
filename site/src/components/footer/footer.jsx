import React from 'react';
import { BedrockContextConsumer } from '@basalt/bedrock-core';
import { Link } from 'react-router-dom';
import { FooterWrapper, FooterMenu, FooterMenuItem } from './footer.styles';

const today = new Date();
const currentYear = today.getFullYear();

const Footer = () => (
  <BedrockContextConsumer>
    {({ settings }) => (
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
          <FooterMenuItem>
            <Link to="/settings">Page Settings</Link>
          </FooterMenuItem>
        </FooterMenu>
        <p>
          Copyright {currentYear} -{' '}
          {settings.parentBrand && (
            <a
              href={settings.parentBrand.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              {settings.parentBrand.title}
            </a>
          )}
        </p>
      </FooterWrapper>
    )}
  </BedrockContextConsumer>
);

export default Footer;
