import React from 'react';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import { Link } from 'react-router-dom';
import { FooterWrapper, FooterMenu, FooterMenuItem } from './footer.styles';

const today = new Date();
const currentYear = today.getFullYear();

const Footer = props => (
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
      {props.context.settings.config.isDevMode && (
        <React.Fragment>
          <FooterMenuItem>
            <Link to="/sandbox">Sandbox</Link>
          </FooterMenuItem>
          <FooterMenuItem>
            <Link to="/settings">Page Settings</Link>
          </FooterMenuItem>
        </React.Fragment>
      )}
    </FooterMenu>
    <p>
      Copyright {currentYear} -{' '}
      {props.context.settings.parentBrand && (
        <a
          href={props.context.settings.parentBrand.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.context.settings.parentBrand.title}
        </a>
      )}
    </p>
  </FooterWrapper>
);

Footer.propTypes = {
  context: contextPropTypes.isRequired,
};

export default connectToContext(Footer);
