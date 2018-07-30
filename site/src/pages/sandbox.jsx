import React from 'react';
import Page from '../templates/page';
import DosAndDonts from '../bedrock/components/dos-and-donts';

const SandboxPage = () => (
  <Page>
    <h3>Sandbox</h3>
    <DosAndDonts
      title="Do's and Don'ts Title"
      description="This will be a place to describe the context surrounding the do's and don'ts pictured."
      items={[
        {
          image:
            'http://uniform.hudl.com/static/button-associatedactions-dont.d3f0af3c.png',
          caption: 'use multiple sizes in the same context.',
          do: false,
        },
        {
          title: 'Do Example',
          image:
            'http://uniform.hudl.com/static/button-associatedactions-do.e76035d2.png',
          caption: 'use button types to emphasize a preferred option.',
          do: true,
        },
      ]}
    />
  </Page>
);

export default SandboxPage;
