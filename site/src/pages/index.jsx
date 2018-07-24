import React from 'react';
import Page from '../templates/page';
import HomeSplash from '../components/home-splash';
import './index.css';

// @todo Evan is working on a better way to pull in styles
import '../../../build/assets/style.css';

const IndexPage = () => (
  <Page>
    <HomeSplash />
  </Page>
);

export default IndexPage;
