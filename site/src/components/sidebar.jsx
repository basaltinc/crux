import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'; // eslint-disable-line

import './sidebar.css';

const SideBarLink = ({ file }) => (
  <li>
    <Link to={file.frontmatter.path}>
      {file.frontmatter.title}
    </Link>
  </li>
);

SideBarLink.propTypes = {
  file: PropTypes.shape({
    frontmatter: PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

const SideBar = ({ files }) => {
  const GeneralLinks = files
    .filter(file => file.node.frontmatter.section === 'General')
    .map(file => (<SideBarLink file={file.node} />));
  const VisualLanguageLinks = files
    .filter(file => file.node.frontmatter.section === 'Visual Language')
    .map(file => (<SideBarLink file={file.node} />));
  const GetStartedLinks = files
    .filter(file => file.node.frontmatter.section === 'Get Started')
    .map(file => (<SideBarLink file={file.node} />));
  const ComponentLinks = files
    .filter(file => file.node.frontmatter.section === 'Components')
    .map(file => (<SideBarLink file={file.node} />));
  // const GeneralLinks = files
  //   .filter(file => file.node.frontmatter.section === 'general')
  //   .map(file => (<SideBarLink file={file.node} />));

  return (
    <div className="sidebar">
      <h4>General</h4>
      <ul>{GeneralLinks}</ul>
      <h4>Get Started</h4>
      <ul>{GetStartedLinks}</ul>
      <h4>Visual Language</h4>
      <ul>{VisualLanguageLinks}</ul>
      <h4>Components</h4>
      <ul>{ComponentLinks}</ul>
    </div>
  );
};

SideBar.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default SideBar;
