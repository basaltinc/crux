import React from 'react';

import ComponentBoard from '../../components/component-board';

// @todo think of a way to not have these be hard coded, then implement that brilliant idea
const perceptualPatternsList = [
  {
    title: 'Animations',
    id: 'animations',
    path: `/visual-language/animations`,
    schema: {
      description: ``,
    },
  },
  {
    title: 'Breakpoints',
    id: 'breakpoints',
    path: '/visual-language/breakpoints',
    schema: {
      description: ``,
    },
  },
  {
    title: 'Colors',
    id: 'colors',
    path: `/visual-language/colors`,
    schema: {
      description: ``,
    },
  },
  {
    title: 'Spacings',
    id: 'spacings',
    path: '/visual-language/spacings',
    schema: {
      description: ``,
    },
  },
  {
    title: 'Typography',
    id: 'typography',
    path: '/visual-language/typography',
    schema: {
      description: ``,
    },
  },
  {
    title: 'Icons',
    id: 'icons',
    path: '/visual-language/icons',
    schema: {
      description: ``,
    },
  },
];

function VisualLanguagePage() {
  return (
    <div>
      <h2>Welcome to the Design System, Visual Language!</h2>
      <ComponentBoard patterns={perceptualPatternsList} ready />
    </div>
  );
}

export default VisualLanguagePage;
