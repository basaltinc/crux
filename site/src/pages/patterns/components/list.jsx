import React from 'react';
import ComponentOverviewPage from '../../../templates/component-overview-page';
import ErrorCatcher from '../../../bedrock/components/error-catcher';
import Logo from '../../../../../images/branding--color.svg';

export default () => (
  <ErrorCatcher>
    <ComponentOverviewPage
      id="list"
      data={{
        list_items: 'Json, React, Arrays, If Statements, Math',
        text_size: 'm',
        bullets: false,
        ordered: false,
        columns: '1',
      }}
    />
  </ErrorCatcher>
);
