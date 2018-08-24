import React from 'react';

import ComponentBoard from '../../components/component-board';

// @todo think of a way to not have these be hard coded, then implement that brilliant idea
const perceptualPatternsList = [
  {
    title: 'Animations',
    id: 'animations',
    path: `/visual-language/animations`,
    description: `Animations are the "stylistic sugar" used to "sweeten" the user experience. Used sparingly – animations provide that extra touch the makes an interface sing.`,
  },
  {
    title: 'Breakpoints',
    id: 'breakpoints',
    path: '/visual-language/breakpoints',
    description: `Breakpoints are the backbone of responsive design and provide us with the ability to effectively deliver layout within nearly any screen size or resolution.`,
  },
  {
    title: 'Colors',
    id: 'colors',
    path: `/visual-language/colors`,
    description: `Color is a defining element of any strong brand identity. We use color to express our brand, and to support or emphasize key messages within the interface.`,
  },
  {
    title: 'Spacings',
    id: 'spacings',
    path: '/visual-language/spacings',
    description: `Visual spacing is key to creating a clean and usable interface. Correctly implemented – visual spacing provides elements with the ability to "breath" by intentionally emphasizing white space.`,
  },
  {
    title: 'Typography',
    id: 'typography',
    path: '/visual-language/typography',
    description: `Typography is the voice of a brand. This set of typefaces best represent Basalt’s brand attributes and personality.`,
  },
  {
    title: 'Icons',
    id: 'icons',
    path: '/visual-language/icons',
    description: `Icons provide a visual and meaningful representation meant to guide the user to specific functionality or status.`,
  },
];

function VisualLanguagePage() {
  return (
    <div>
      <h2>Visual Language</h2>
      <p>Explore the visual language that makes up the Crux Design System.</p>
      <ComponentBoard patterns={perceptualPatternsList} ready />
    </div>
  );
}

export default VisualLanguagePage;
