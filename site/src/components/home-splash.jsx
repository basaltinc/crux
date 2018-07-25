import React from 'react';

import './home-splash.css';

const HomeSplash = () => (
  <div className="home-splash__wrapper">
    <div className="home-splash">
      <h2 className="home-splash__eyebrow">Design System by Basalt</h2>
      <h1 className="home-splash__title">Crux</h1>
      <p className="home-splash__version-tag">v0.1-alpha</p>
      <div className="home-splash__ctas">
        <button className="button">Use Crux</button>
        <button className="button">Explore Crux</button>
        <button className="button">Contribute to Crux</button>
      </div>
    </div>
  </div>
);

export default HomeSplash;
