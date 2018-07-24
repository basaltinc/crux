import React from 'react';
import Demo from '../components/demo';
import Page from '../templates/page';
import HomeSplash from '../components/home-splash';
import './index.css';

const IndexPage = () => (
  <Page>
    <HomeSplash />
    <Demo
      template="@components/_button.twig"
      data={{
        text: 'ima button',
        url: '#',
      }}
    />
  </Page>
);

export default IndexPage;
