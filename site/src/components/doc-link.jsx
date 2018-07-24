import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const DocLink = ({ doc }) => (
  <li>
    <Link to={doc.frontmatter.path}>
      {doc.frontmatter.title}
    </Link>
  </li>
);

DocLink.propTypes = {
  doc: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  }).isRequired,
};

export default DocLink;
