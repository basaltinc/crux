import React from 'react';
import PropTypes from 'prop-types';
import AboutPage from '../../templates/about-page';

const FeatureRequestPage = () => (
  <AboutPage className="docs">
    <div className="body">
      <h4 className="eyebrow">About</h4>
      <h2>Feature Requests and Bugs</h2>
      <hr />
      <blockquote>
        Ask, and you shall receive (in three to five business days). - Genie
      </blockquote>
      <hr />
      <h4>Feature Requests</h4>
      <p>
        At Basalt, we strive to serve the needs of our customers, users of
        design systems, and the greater design system community.
      </p>
      <p>
        Is there a feature you would like to see? Have a great idea? Can we
        serve you better?
      </p>
      <a
        href="https://3.basecamp.com/3884180/buckets/5827789/todolists/1207207552#adding_to_1207207552"
        className="button button--color-blue button--size-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        Request a Feature
      </a>
      <br />
      <br />
      <h4>Bugs and Issues</h4>
      <p>
        Development, much like design, is an iterative process. In our quest to
        innovate and grow, bugs sometimes slip through the cracks. Help us catch
        them by reporting any bugs or issues you may be experiencing.
      </p>
      <a
        href="https://3.basecamp.com/3884180/buckets/5827789/todolists/1219730803"
        className="button button--color-blue button--size-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        Report a Bug
      </a>
    </div>
  </AboutPage>
);

export default FeatureRequestPage;
