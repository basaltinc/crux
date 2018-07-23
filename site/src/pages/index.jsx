import React from 'react';

import Header from '../components/header';
import HomeSplash from '../components/home-splash';

import './index.css';

const IndexPage = () => (
  <div className="app">
    <Header className="app__header" siteTitle={'Basalt Design System'}/>
    <div className="app__body">
      <HomeSplash></HomeSplash>
    </div>
    <div className="app__footer"></div>
  </div>
);

export default IndexPage;
