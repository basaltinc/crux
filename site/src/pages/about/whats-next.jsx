import React from 'react';

import AboutPage from '../../templates/about-page';
import Spinner from '../../bedrock/components/spinner';

const WhatsNextPage = () => (
  <AboutPage className="docs">
    <div className="body">
      <h4 className="eyebrow">About</h4>
      <h2>What is Next</h2>
      <hr />
      <blockquote>
        Ask, and you shall receive (in three to five business days). - Genie
      </blockquote>
      <hr />
    </div>
    <Spinner />
    <p>Design systems are living things that evolve and grow over time.</p>
    <p>Stay tuned, we are hard at work making a brilliant design system.</p>
  </AboutPage>
);

export default WhatsNextPage;
