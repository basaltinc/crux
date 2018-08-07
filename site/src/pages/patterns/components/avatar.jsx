import React from 'react';
import { image } from '@basalt/demo-data';
import ComponentOverviewPage from '../../../templates/component-overview-page';
import ErrorCatcher from '../../../bedrock/components/error-catcher';
import avatarDont from "../../../../../images/dos-and-donts/avatars/avatars-dont.png";
import avatarDo from "../../../../../images/dos-and-donts/avatars/avatars-do.png";

export default () => (
  <ErrorCatcher>
    <ComponentOverviewPage
      id="avatar"
      size="s"
      data={{
        size: 'xl',
        img: image(),
      }}
      dosAndDonts={[
        {
          title: '',
          items: [
            {
              image: avatarDont,
              caption: 'add a border to avatars.',
              do: false,
            },
            {
              title: 'Do Example',
              image: avatarDo,
              caption: 'use avatars as styled.',
              do: true,
            },
          ],
        },
      ]}
    />
  </ErrorCatcher>
);
