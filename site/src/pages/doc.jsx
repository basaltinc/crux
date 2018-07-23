import React from 'react';
import { graphql } from 'gatsby';
import DocLink from '../components/doc-link';
import Header from '../components/header';

const DocPage = ({
                     data: {
                       allMarkdownRemark: { edges },
                     },
                   }) => {
  const DocLinks = edges
    .filter(edge => !!edge.node.frontmatter) // You can filter your posts based on some criteria
    .map(edge => <DocLink key={edge.node.id} doc={edge.node} />);

  return (
    <div>
      <Header siteTitle={'Basalt Design System'} />
      <div className="side-bar">
        <ul>{DocLinks}</ul>
      </div>
    </div>
  );
};

export default DocPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            order
          }
        }
      }
    }
  }
`;
