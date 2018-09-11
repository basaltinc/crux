import React from 'react';
import { contextPropTypes, connectToContext } from '@basalt/bedrock-core';
import ComponentBoard from '../../../components/component-board/component-board';

function VisualLanguagePage({ context }) {
  return (
    <div>
      <h2>Visual Language</h2>
      <p>Explore the visual language that makes up the Crux Design System.</p>
      <ComponentBoard patterns={context.designTokens} ready />
    </div>
  );
}

VisualLanguagePage.propTypes = {
  context: contextPropTypes.isRequired,
};

export default connectToContext(VisualLanguagePage);
