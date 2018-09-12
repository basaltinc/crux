import React from 'react';
import { contextPropTypes, connectToContext } from '@basalt/bedrock-core';
import PatternGrid from '@basalt/bedrock-pattern-grid';

function DesignTokenPage({ context }) {
  return (
    <div>
      <h2>Visual Language</h2>
      <p>Explore the visual language that makes up the Crux Design System.</p>
      <PatternGrid patterns={context.designTokens} ready />
    </div>
  );
}

DesignTokenPage.propTypes = {
  context: contextPropTypes.isRequired,
};

export default connectToContext(DesignTokenPage);
