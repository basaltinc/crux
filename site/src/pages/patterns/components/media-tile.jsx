import React from 'react';
import { image, paragraph, title } from '@basalt/demo-data';
import ComponentOverviewPage from '../../../templates/component-overview-page';
import ErrorCatcher from '../../../bedrock/components/error-catcher';

export default () => (
  <ErrorCatcher>
    <ComponentOverviewPage
      id="media-tile"
      demoSizes={['400px']}
      data={{
        title: title(),
        body: paragraph(),
        desc: title(),
        background_image: image(),
        title_text_color: 'white',
        body_text_color: 'white',
        content_padding: 'l',
        text_align: 'center',
        title_size: '2',
      }}
    />
  </ErrorCatcher>
);
