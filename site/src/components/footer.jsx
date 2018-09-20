import React from 'react';
import { connectToContext, contextPropTypes } from '@basalt/bedrock-core';
import { Link } from 'react-router-dom';
import { FooterWrapper, FooterMenu, FooterMenuItem } from './footer.styles';

const today = new Date();
const currentYear = today.getFullYear();

const Footer = props => (
  <FooterWrapper>
    <FooterMenu>
      {props.context.settings.isDevMode && (
        <React.Fragment>
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
