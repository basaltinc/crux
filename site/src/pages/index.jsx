import React from 'react';
import Link from 'gatsby-link';
import Demo from '../components/demo';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <Demo
      template="@components/_button.twig"
      data={{
        text: 'ima button',
        url: '#',
      }}
    />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
