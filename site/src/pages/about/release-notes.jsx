import React from 'react';

import AboutPage from '../../templates/about-page';

const ReleaseNotesPage = () => (
  <AboutPage className="docs">
    <div className="body">
      <h4 className="eyebrow">About</h4>
      <h2>Release Notes</h2>
      <hr />
      <blockquote>
        Take note, we're releasing some amazing things. - Evan Lovely, CTO
      </blockquote>
      <hr />
    </div>
    <h3>Verison 0.1.0</h3>
    <ul>
      <li>Awesome Sauce</li>
      <li>Pretty Much Everything</li>
    </ul>
  </AboutPage>
);

export default ReleaseNotesPage;
