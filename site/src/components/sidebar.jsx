import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'; // eslint-disable-line

import './sidebar.css';

const SideBarLink = ({ file }) => (
  <li>
    <Link to={file.frontmatter.path}>{file.frontmatter.title}</Link>
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
    .map(file => <SideBarLink file={file.node} />);
  const VisualLanguageLinks = files
    .filter(file => file.node.frontmatter.section === 'Visual Language')
    .map(file => <SideBarLink file={file.node} />);
  const AboutLinks = files
    .filter(file => file.node.frontmatter.section === 'About')
    .map(file => <SideBarLink file={file.node} />);
  const ResourceLinks = files
    .filter(file => file.node.frontmatter.section === 'Resources')
    .map(file => <SideBarLink file={file.node} />);
  const ComponentLinks = files
    .filter(file => file.node.frontmatter.section === 'Components')
    .map(file => <SideBarLink file={file.node} />);

  return (
    <div className="sidebar">
      <ul>{GeneralLinks}</ul>
      <Link to="/visual-language">
        <h4>Visual Language</h4>
      </Link>
      <ul>
        <li>
          <Link to="/visual-language/colors">Colors</Link>
        </li>
        <li>
          <Link to="/visual-language/spacing">Spacing</Link>
        </li>
        <li>
          <Link to="/visual-language/animations">Animations</Link>
        </li>
        {VisualLanguageLinks}
      </ul>
      <Link to="/components">
        <h4>Components</h4>
      </Link>
      <ul>{ComponentLinks}</ul>
      <Link to="/about">
        <h4>About</h4>
      </Link>
      <ul>{AboutLinks}</ul>
      <Link to="/resources">
        <h4>Resources</h4>
      </Link>
      <ul>{ResourceLinks}</ul>
    </div>
  );
};

SideBar.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SideBar;
