import React from 'react';
import { graphql } from 'gatsby';

import DocLink from '../components/doc-link';
import Page from '../templates/page';

import  './doc.css';

const Template = ({ data, children }) => {
  const markdownFiles = data.allMarkdownRemark.edges;
  const DocLinks = markdownFiles.map((markdownFile) => {
    return (<DocLink doc={markdownFile.node} />);
  });

  const { html, frontmatter } = data.markdownRemark;

  console.log("JOLO", data);


  return (
    <Page className="docs">
      <div className="sidebar">
        <h4>Menu</h4>
        <ul>{DocLinks}</ul>
      </div>
      <div className="body">
        <h2>{frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Page>
  );
};

export default Template;

export const pageQuery = graphql`
  query DocsByPath($path: String!) {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
