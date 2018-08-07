import React from 'react';
import { text } from '@basalt/demo-data';
import ComponentOverviewPage from '../../../templates/component-overview-page';
import ErrorCatcher from '../../../bedrock/components/error-catcher';
import buttonDont from '../../../../../images/dos-and-donts/buttons/buttons-dont.png';
import buttonDo from '../../../../../images/dos-and-donts/buttons/buttons-do.png';
import VisualLanguagePage from '../../../templates/visual-language-page';

export default () => (
  <ComponentOverviewPage
    id="button"
    data={{
      text: text(),
      url: 'http://www.basalt.io',
      size: 'small',
      color: 'blue--light',
    }}
    bugReport={{
      title: 'testing 123',
    }}
    dosAndDonts={[
      {
        title: '',
        items: [
          {
            image: buttonDont,
            caption: 'use mismatched button sizes next to each other.',
            do: false,
          },
          {
            title: 'Do Example',
            image: buttonDo,
            caption: 'use buttons of the same size.',
            do: true,
          },
        ],
      },
    ]}
  />
);
