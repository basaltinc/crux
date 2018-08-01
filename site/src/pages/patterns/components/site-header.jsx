import React from 'react';
import ComponentOverviewPage from '../../../templates/component-overview-page';
import ErrorCatcher from '../../../bedrock/components/error-catcher';

export default () => (
  <ErrorCatcher>
    <ComponentOverviewPage
      id="site-header"
      size="full"
      data={{
        menu_items: [
          {
            url: '#',
            text: 'Menu Item One',
            active: true,
          },
          {
            url: '#',
            text: 'Menu Item Two',
          },
          {
            url: '#',
            text: 'Menu Item Three',
          },
          {
            url: '#',
            text: 'Menu Item Four',
          },
        ],
      }}
    />
  </ErrorCatcher>
);
