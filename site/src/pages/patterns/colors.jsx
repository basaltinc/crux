import React from 'react';

import PatternPage from '../../templates/pattern-page';
import ColorSwatches from '../../components/color-swatch';


const ColorsPage = () => (
  <PatternPage className="docs">
    <div className="body">
      <h4 className="eyebrow">Visual Language</h4>
      <h2>Colors</h2>
      <hr />
      <blockquote>
        Mere colour, unspoiled by meaning, and unallied with definite form, can
        speak to the soul in a thousand different ways. - Oscar Wilde
      </blockquote>
      <hr />
      <p>
        Color is a defining element of any strong brand identity. Dedicated use
        of the Basalt palette with reinforce the cohesiveness of the brand and
        visually communicates your brand personality with your audience.
      </p>
      <p>
        The Basalt palette is a 5 color structure that contains two light tones,
        two dark tones and a brighter spot color. Together they channel natural
        elements while staying energetic and active creating balance and
        speaking to the Basalt brand story.
      </p>
      <p>
        Each color has a Sass variable and two utility classes. For example,
        $c-blue has : .u-c-blue for color and .u-bg-blue for background-color.
      </p>
      <ColorSwatches colors={colors} />
    </div>
  </PatternPage>
);

export default ColorsPage;
