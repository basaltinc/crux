import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import DosAndDonts from '@basalt/bedrock-dos-and-donts';

storiesOf('DosAndDonts', module).add(
  'Overview',
  withInfo({
    inline: true,
  })(() => (
    <DosAndDonts
      title={"Do's and Dont's Story"}
      description="This is where you show examples, with photos, of good and bad implementation decisions."
      items={[
        {
          image: 'https://placeimg.com/640/480/nature',
          caption: 'this!',
          do: true,
        },
        {
          image: 'https://placeimg.com/640/480/tech',
          caption: 'do this!',
          do: false,
        },
      ]}
    />
  )),
);
