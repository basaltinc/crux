import React from 'react';
import { image } from '@basalt/demo-data';
import ComponentOverviewPage from '../../../templates/component-overview-page';
import ErrorCatcher from '../../../bedrock/components/error-catcher';

export default () => (
  <ErrorCatcher>
    <ComponentOverviewPage
      id="avatar"
      size="s"
      data={{
        size: 'xl',
        img: image(),
      }}
    />
  </ErrorCatcher>
);
