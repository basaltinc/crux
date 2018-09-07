import React from 'react';
import { BlockQuoteWrapper } from '@basalt/bedrock-atoms';
import { ShadowDemoBox } from './shadows.styles';

function ShadowsPage() {
  return (
    <div>
      <h4 className="eyebrow">Visual Language</h4>
      <h2>Shadows</h2>
      <BlockQuoteWrapper>
        To contemplate is to look at shadows.
        <footer>Victor Hugo</footer>
      </BlockQuoteWrapper>
      <h3>Static Shadows</h3>
      <div>
        <ShadowDemoBox className="crux-shadow--xsmall">
          <h5>Xsmall</h5>
          <code>.crux-shadow--xsmall</code>
        </ShadowDemoBox>
        <ShadowDemoBox className="crux-shadow--small">
          <h5>Small</h5>
          <code>.crux-shadow--small</code>
        </ShadowDemoBox>
        <ShadowDemoBox className="crux-shadow--medium">
          <h5>Medium</h5>
          <code>.crux-shadow--medium</code>
        </ShadowDemoBox>
        <ShadowDemoBox className="crux-shadow--large">
          <h5>Large</h5>
          <code>.crux-shadow--large</code>
        </ShadowDemoBox>
        <ShadowDemoBox className="crux-shadow--xlarge">
          <h5>Xlarge</h5>
          <code>.crux-shadow--xlarge</code>
        </ShadowDemoBox>
        <ShadowDemoBox className="crux-shadow--inset">
          <h5>Inset</h5>
          <code>.crux-shadow--inset</code>
        </ShadowDemoBox>
      </div>
      <h3>Animated Shadows</h3>
      <div>
        <ShadowDemoBox
          className="crux-shadow--xsmall--animated"
          tabIndex="0"
          role="textbox"
        >
          <h5>Xsmall</h5>
          <code>.crux-shadow--xsmall--animated</code>
        </ShadowDemoBox>
        <ShadowDemoBox
          className="crux-shadow--small--animated"
          tabIndex="0"
          role="textbox"
        >
          <h5>Small</h5>
          <code>.crux-shadow--small--animated</code>
        </ShadowDemoBox>
        <ShadowDemoBox
          className="crux-shadow--medium--animated"
          tabIndex="0"
          role="textbox"
        >
          <h5>Medium</h5>
          <code>.crux-shadow--medium--animated</code>
        </ShadowDemoBox>
        <ShadowDemoBox
          className="crux-shadow--large--animated"
          tabIndex="0"
          role="textbox"
        >
          <h5>Large</h5>
          <code>.crux-shadow--large--animated</code>
        </ShadowDemoBox>
        <ShadowDemoBox
          className="crux-shadow--xlarge--animated"
          tabIndex="0"
          role="textbox"
        >
          <h5>Xlarge</h5>
          <code>.crux-shadow--xlarge--animated</code>
        </ShadowDemoBox>
        <ShadowDemoBox
          className="crux-shadow--inset--animated"
          tabIndex="0"
          role="textbox"
        >
          <h5>Inset</h5>
          <code>.crux-shadow--inset--animated</code>
        </ShadowDemoBox>
      </div>
    </div>
  );
}

export default ShadowsPage;
