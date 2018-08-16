import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TabbedPanel from '@basalt/bedrock-tabbed-panel';
import { paragraph, title } from '@basalt/demo-data';

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

storiesOf('TabbedPanel', module)
  .add(
    'Overview',
    withInfo({
      inline: true,
    })(() => <TabbedPanel items={tabbedPanelItems} />),
  )
  .add('Colors', () => (
    <div>
      <TabbedPanel items={tabbedPanelItems} color="icon" />
      <br />
      <TabbedPanel items={tabbedPanelItems} color="component" />
      <br />
      <TabbedPanel items={tabbedPanelItems} color="typography" />
      <br />
      <TabbedPanel items={tabbedPanelItems} color="layout" />
    </div>
  ));
