import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  const { bedrockSettings } = window;
  ReactDom.render(
    <App bedrockSettings={bedrockSettings} />,
    document.getElementById('app'),
  );
});
