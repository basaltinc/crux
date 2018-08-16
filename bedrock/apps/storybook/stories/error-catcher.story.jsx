import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ErrorCatcher from '@basalt/bedrock-error-catcher';

function bad() {
  // @todo make this throw an error
  throw new Error('hi');
}

storiesOf('ErrorCatcher', module).add(
  'Overview',
  withInfo({
    inline: true,
  })(() => (
    <ErrorCatcher>
      <div>
        sub-components that could throw error
        <div onClick={() => bad()}>click me to throw error</div>
      </div>
    </ErrorCatcher>
  )),
);
