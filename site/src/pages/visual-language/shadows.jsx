import React from 'react';
import styled from 'styled-components';

const ShadowDemoBox = styled.div`
  display: inline-block;
  height: 225px;
  margin: 2.5rem;
  position: relative;
  width: 325px;
  vertical-align: top;
  padding: 0.7rem;
`;

function ShadowsPage() {
  return (
    <div>
      <h3>Regular Shadows</h3>
      <div>
        <ShadowDemoBox className="u-crux-shadow--level-10" />
        <ShadowDemoBox className="u-crux-shadow--level-20" />
        <ShadowDemoBox className="u-crux-shadow--level-30" />
        <ShadowDemoBox className="u-crux-shadow--level-40" />
        <ShadowDemoBox className="u-crux-shadow--level-50" />
        <ShadowDemoBox className="u-crux-shadow--level-60" />
        <ShadowDemoBox className="u-crux-shadow--level-70" />
      </div>
      <h3>Hoverable Shadows</h3>
      <div>
        <ShadowDemoBox className="u-crux-shadow--level-10--hoverable" />
        <ShadowDemoBox className="u-crux-shadow--level-20--hoverable" />
        <ShadowDemoBox className="u-crux-shadow--level-30--hoverable" />
        <ShadowDemoBox className="u-crux-shadow--level-40--hoverable" />
        <ShadowDemoBox className="u-crux-shadow--level-50--hoverable" />
        <ShadowDemoBox className="u-crux-shadow--level-60--hoverable" />
        <ShadowDemoBox className="u-crux-shadow--level-70--hoverable" />
      </div>
    </div>
  );
}

export default ShadowsPage;
