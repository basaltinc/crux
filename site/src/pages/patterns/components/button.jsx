import React from 'react';
import { title, paragraph, text } from '@basalt/demo-data';
import ComponentOverviewPage from '../../../templates/component-overview-page';
import ErrorCatcher from '../../../bedrock/components/error-catcher';


export default () => (
  <ErrorCatcher>
    <ComponentOverviewPage
      id="button"
      data={{
        text: text(),
        url: 'http://www.basalt.io',
        size: 'small',
        color: 'blue--light',
      }}
    />
  </ErrorCatcher>
);
