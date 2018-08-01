import React from 'react';
import { paragraph, text, image } from '@basalt/demo-data';
import ComponentOverviewPage from '../../../templates/component-overview-page';
import ErrorCatcher from '../../../bedrock/components/error-catcher';

export default () => (
  <ErrorCatcher>
    <ComponentOverviewPage
      id="exec-bio"
      data={{
        is_even: true,
        avatar: image(),
        name: text(),
        twitter: 'CuteBabyAnimals',
        bio: paragraph(),
      }}
    />
  </ErrorCatcher>
);
