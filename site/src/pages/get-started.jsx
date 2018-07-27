import React from 'react';
import PropTypes from 'prop-types';

import LinkList from '../components/link-list';
import Page from '../templates/page';

const Template = () => {
  const generalLinks = [
    {
      path: '/get-started',
      id: 'get-started-docs',
      name: 'Get Started',
    },
    {
      path: '/get-started',
      id: 'get-started-contributing',
      name: 'Get Started Contributing',
    },
    {
      path: '/get-started',
      id: 'get-started-other',
      name: 'Get Started - filler link more to come',
    },
  ];

  return (
    <Page className="general" sidebarOne={<LinkList items={generalLinks} />}>
      <div className="body">
        <h4 className="eyebrow">General</h4>
        <h2>Get Started</h2>
        <div>
          <hr />
          <blockquote className="definition">
            “It’s art if can’t be explained. It’s fashion if no one asks for an
            explanation. It’s design if it doesn’t need explanation.” — Wouter
            Stokkel
          </blockquote>
          <hr />
        </div>
        <p>Welcome to Crux, a design system from Basalt by Basalt.</p>
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
          Load the Sketch file assets here... @todo Jake, do you know how to do
          this magic?
        </p>
      </div>
    </Page>
  );
};

Template.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default Template;
