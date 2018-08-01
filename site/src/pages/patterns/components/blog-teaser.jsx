import React from 'react';
import { title, paragraph, text, image } from '@basalt/demo-data';
import ComponentOverviewPage from '../../../templates/component-overview-page';
import ErrorCatcher from '../../../bedrock/components/error-catcher';

export default () => (
  <ErrorCatcher>
    <ComponentOverviewPage
      id="blog-teaser"
      size="full"
      data={{
        title: title(),
        author: 'John Doe',
        teaser_avatar: image(),
        date: 'January 1st, 2000',
        summary: paragraph(),
        color: 'blue--light',
        image: image(),
        is_even: true,
      }}
    />
  </ErrorCatcher>
);
