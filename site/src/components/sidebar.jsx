import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const SideBarLink = ({ file }) => (
  <li>
    <Link to={file.frontmatter.path}>
      {file.frontmatter.title}
    </Link>
  </li>
);

const SideBar = ({ files }) => {
  const GeneralLinks = files
    .filter(file => file.node.frontmatter.section === 'general')
    .map(file => (<SideBarLink file={file.node} />));
  const VisualLanguageLinks = files
    .filter(file => file.node.frontmatter.section === 'visual-language')
    .map(file => (<SideBarLink file={file.node} />));
  const GetStartedLinks = files
    .filter(file => file.node.frontmatter.section === 'get-started')
    .map(file => (<SideBarLink file={file.node} />));
  const ComponentLinks = files
    .filter(file => file.node.frontmatter.section === 'components')
    .map(file => (<SideBarLink file={file.node} />));
  // const GeneralLinks = files
  //   .filter(file => file.node.frontmatter.section === 'general')
  //   .map(file => (<SideBarLink file={file.node} />));

  return (
    <div className="sidebar">
      <ul>{GeneralLinks}</ul>
      <h4>Get Started</h4>
      <ul>{GetStartedLinks}</ul>
      <h4>Visual Language</h4>
      <ul>{VisualLanguageLinks}</ul>
      <h4>Components</h4>
      <ul>{ComponentLinks}</ul>
    </div>
  );
}

SideBar.PropTypes = {
  files: PropTypes.array,
}


export default SideBar;
