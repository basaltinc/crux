import React from 'react';

import { TwoUp } from '../../bedrock/components/atoms';

function LogoUsage() {
  return (
    <div>
      <h3 className="eyebrow">Resources</h3>
      <h2>Descriptors</h2>
      <TwoUp>
        <div>
          <h4>Primary</h4>
          <ul>
            <li>Energetic</li>
            <li>Passionate</li>
            <li>Geeky</li>
          </ul>
        </div>
        <div>
          <h4>Secondary</h4>
          <ul>
            <li>Cutting Edge</li>
            <li>Progressive</li>
            <li>Visionary</li>
            <li>Best in Class</li>
          </ul>
        </div>
      </TwoUp>
      <TwoUp>
        <div>
          <h4>Tertiary</h4>
          <ul>
            <li>Coordinated</li>
            <li>streamlined</li>
            <li>disciplined</li>
            <li>Relatable (speaking your language, consultative)</li>
            <li>Authentic</li>
            <li>Technical</li>
          </ul>
        </div>
        <div>
          <h4>Supporting</h4>
          <ul>
            <li>Imaginative</li>
            <li>Specialized</li>
            <li>Focused</li>
            <li>Small</li>
            <li>Intimate Adventurous</li>
            <li>Treasure Hunters</li>
            <li>Opinionated</li>
            <li>Iterative</li>
            <li>Thoughtful</li>
            <li>Curators</li>
            <li>Fast Moving</li>
            <li>Contrast</li>
            <li>Crafted</li>
          </ul>
        </div>
      </TwoUp>
    </div>
  );
}

LogoUsage.propTypes = {};

export default LogoUsage;
