import React from 'react';

import AboutPage from '../../templates/about-page';

const ReleaseNotesPage = () => (
  <AboutPage className="docs">
    <div className="body">
      <h4 className="eyebrow">About</h4>
      <h2>Feature Requests</h2>
      <hr />
      <blockquote>
        Ask, and you shall receive (in three to five business days). - Genie
      </blockquote>
      <hr />
    </div>
    <form action="#">
      {/* <div> */}
      {/* <label htmlFor="name">Name</label> */}
      {/* <input type="text" id="name" /> */}
      {/* </div> */}
      {/* <div> */}
      {/* <label htmlFor="email">Email</label> */}
      {/* <input type="text" id="email" /> */}
      {/* </div> */}
      {/* <div> */}
      {/* <label htmlFor="body">Feature Request</label> */}
      {/* <input type="textarea" id="body" /> */}
      {/* </div> */}
    </form>
  </AboutPage>
);

export default ReleaseNotesPage;
