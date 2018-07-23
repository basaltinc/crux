import React from 'react';
import { graphql } from 'gatsby';

import DocLink from '../components/doc-link';
import Page from '../templates/page';

const Template = ({ data, children }) => {
  const markdownFiles = data.allMarkdownRemark.edges;
  const DocLinks = markdownFiles.map((markdownFile) => {
    return (<DocLink doc={markdownFile.node} />);
  });


  return (
    <Page>
      <div className="sidebar">
        <h4>Menu</h4>
        <ul>{DocLinks}</ul>
      </div>
      <div>

      </div>
    </Page>
  );
};

export default Template;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            order
          }
        }
      }
    }
  }
`;
