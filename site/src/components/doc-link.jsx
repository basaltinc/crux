import React from 'react';
import Link from 'gatsby-link';

const DocLink = ({ doc }) => (
  <li>
    <Link to={doc.frontmatter.path}>
      {doc.frontmatter.title} ({doc.frontmatter.date})
    </Link>
  </li>
);

export default DocLink;
