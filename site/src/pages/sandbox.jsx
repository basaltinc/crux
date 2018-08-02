import React from 'react';

import { image, paragraph, text, title } from '@basalt/demo-data';

import Page from '../templates/page';
import DosAndDonts from '../bedrock/components/dos-and-donts';
import Spinner from '../bedrock/components/spinner';
import { Details } from '../bedrock/components/atoms';
import TabbedPanel from '../bedrock/components/tabbed-panel';

const tabbedPanelItems = [
  {
    id: 1,
    title: 'Item 1 Title',
    varName: '$ff--item--light',
    varValue: "'AvenirLight', sans-serif",
    children: <p contentEditable>{paragraph()}</p>,
    notes: <p>{title()}</p>,
  },
  {
    id: 2,
    title: 'Item 2 Longer Title',
    varName: '$ff--item--dark',
    varValue: "'AvenirDark', sans-serif",
    children: <p contentEditable>{paragraph()}</p>,
    notes: <p>{title()}</p>,
  },
  {
    id: 3,
    title: 'Item 3',
    varName: '$ff--item--light-dark',
    varValue: "'AvenirLightDark', sans-serif",
    children: <p contentEditable>{paragraph()}</p>,
    notes: <p>{title()}</p>,
  },
].map(item => {
  item.header = (
    <span>
      <code>{item.varName}</code>: {item.varValue}
    </span>
  );
  return item;
});

const SandboxPage = () => (
  <Page>
    <h3>Sandbox</h3>
    <h4>Details</h4>
    <Details>
      <summary>the summary</summary>
      <p>hello</p>
    </Details>
    <h4>TabbedPanel</h4>
    <TabbedPanel items={tabbedPanelItems} />
    <br />
    <TabbedPanel items={tabbedPanelItems} color="icon" />
    <br />
    <TabbedPanel items={tabbedPanelItems} color="component" />
    <br />
    <TabbedPanel items={tabbedPanelItems} color="typography" />
    <br />
    <TabbedPanel items={tabbedPanelItems} color="layout" />

    <br />
    <hr />
    <h4>Dos and Donts</h4>
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
    <hr />

    <h4>Spinner</h4>
    <Spinner />
  </Page>
);

export default SandboxPage;
