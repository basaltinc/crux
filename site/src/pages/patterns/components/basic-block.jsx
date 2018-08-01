import React from 'react';
import { title, paragraph, text } from '@basalt/demo-data';
import ComponentOverviewPage from '../../../templates/component-overview-page';
import ErrorCatcher from '../../../bedrock/components/error-catcher';

export default () => (
  <ErrorCatcher>
    <ComponentOverviewPage
      id="basic-block"
      data={{
        title: title(),
        content: paragraph(),
        buttons: [
          {
            text: text(),
            url: '#',
            size: 'large',
            color: 'green',
          },
        ],
      }}
    />
  </ErrorCatcher>
);
