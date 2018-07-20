import React from 'react';
import Link from 'gatsby-link';

const DocLink = ({ doc }) => (
  <div>
    <Link to={doc.frontmatter.path}>
      {doc.frontmatter.title} ({doc.frontmatter.date})
    </Link>
  </div>
);

export default DocLink;
