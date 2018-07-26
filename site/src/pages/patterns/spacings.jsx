import React from 'react';

import PatternPage from '../../templates/pattern-page';
import SpacingSwatches from '../../components/spacing';

// @todo Get spacing from the manifest when the manifest is built
const spacing = {
  items: [
    {
      name: '$spacing--xs',
      value: '.5rem',
      comment: '',
    },
    {
      name: '$spacing--s',
      value: '.75rem',
      comment: '',
    },
    {
      name: '$spacing--m',
      value: '1rem',
      comment: '',
    },
    {
      name: '$spacing--l',
      value: '1.5rem',
      comment: '',
    },
    {
      name: '$spacing--xl',
      value: '2rem',
      comment: '',
    },
    {
      name: '$spacing--xxl',
      value: '3rem',
      comment: '',
    },
    {
      name: '$spacing--xxxl',
      value: '4rem',
      comment: '',
    },
  ],
  meta: {
    description:
      'To add to these items, use Sass variables that start with <code>$spacing--</code> in <code>pattern-lab/source/_patterns/00-styleguide/10-spacing/_spacing.scss</code>',
  },
};

const SpacingPage = () => (
  <PatternPage>
    <div className="body">
      <h4 className="eyebrow">Visual Language</h4>
      <h2>Spacing</h2>
      <hr />
      <blockquote>
        Whitespace is like air: it is necessary for design to breathe. –
        Wojciech Zieliński
      </blockquote>
      <hr />
      <p>
        Space is a fundamental concept to any visual design language. Space and
        proximity are powerful conveyors of relationships. Like things belong
        together, unlike things should be apart.
      </p>
      <SpacingSwatches spaces={spacing} />
    </div>
  </PatternPage>
);

export default SpacingPage;
