import React from 'react';
import { image, paragraph, title } from '@basalt/demo-data';
import ComponentOverviewPage from '../../../templates/component-overview-page';

export default () => (
  <ComponentOverviewPage
    id="media-block"
    demoSizes={['500px', '800px']}
    data={{
      title: title(),
      body: paragraph(),
      desc: title(),
      media: image(),
      media_alignment: 'top',
    }}
  />
);
