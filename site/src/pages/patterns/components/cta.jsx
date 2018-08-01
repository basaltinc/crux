import React from 'react';
import { text } from '@basalt/demo-data';
import ComponentOverviewPage from '../../../templates/component-overview-page';
import ErrorCatcher from '../../../bedrock/components/error-catcher';

export default () => (
  <ErrorCatcher>
    <ComponentOverviewPage
      id="cta"
      data={{
        text: 'We build consistent, scalable, and maintainable solutions to power your digital strategy.',
      }}
    />
  </ErrorCatcher>
);
