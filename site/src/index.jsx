import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
  ReactDom.render(<App />, document.getElementById('app'));
});
