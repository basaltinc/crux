import React from 'react';
import { title, paragraph, text } from '@basalt/demo-data';
import ComponentOverviewPage from '../../../templates/component-overview-page';
import ErrorCatcher from '../../../bedrock/components/error-catcher';
import Logo from '../../../../../images/branding--color.svg';


export default () => (
  <ErrorCatcher>
    <ComponentOverviewPage
      id="logo"
      data={{
        imgSrc: Logo,
        url: 'http://www.basalt.io',
        size: 'large',
        greyscale: false,
      }}
    />
  </ErrorCatcher>
);
