import React from 'react';
import { BlockQuoteWrapper } from '@basalt/bedrock-atoms';

const AboutPage = () => (
  <div className="body">
    <h4 className="eyebrow">About</h4>
    <h2>Get Started</h2>
    <BlockQuoteWrapper>
      It’s art if can’t be explained. It’s fashion if no one asks for an
      explanation. It’s design if it doesn’t need explanation.
      <footer>Wouter Stokkel</footer>
    </BlockQuoteWrapper>
    <p>
      Crux is a design system created by Basalt, a premier web development
      agency that specializes in design systems.
    </p>
    <p>This is the getting started docs.</p>
    <h3 id="usingcrux">Using Crux</h3>
    <p>Install pieces...</p>
    <pre>
      <code className="bash language-bash">
        npm install @basalt/our-design-system
      </code>
    </pre>
    <h3 id="contributingtocrux">Contributing to Crux</h3>
    <p>Install the mono-repo</p>
    <pre>
      <code className="bash language-bash">
        npm install @basalt... npm start
      </code>
    </pre>
    <h3 id="cruxfordesigners">Crux For Designers</h3>
    <p>
      Load the Sketch file assets here... @todo Jake, do you know how to do this
      magic?
    </p>
  </div>
);

export default AboutPage;
