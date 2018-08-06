import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ResourcePage from '../../templates/resources-page';

class LogoUsage extends Component {
  render() {
    return (
      <ResourcePage>
        <h3 className="eyebrow">Resources</h3>
        <h2>Logo Usage</h2>
        <h4>Primary Logo</h4>
        <p>Basalt’s primary logo incorporates the icon into the wordmark creating a clean and boldly a ective brand identity. The use of all caps brings a modern sense of strength and stability. The icon represents an abstracted and geometric tent but also mimics the structure of basalt columns bringing the overall tone back to the natural world and creating a playful sense of adventure.</p>
        <p>This is the main logo that will be used across all primary brand applications and platforms. It is the main touch point for your audience to identity Basalts product, web presence, social media, ads, and other brand materials. It is imperative that the logo always be applied with consideration and accordance to the brand guidelines to maximize the success of Basalts brand presence.</p>
      </ResourcePage>
    );
  }
}

LogoUsage.propTypes = {};

export default LogoUsage;
