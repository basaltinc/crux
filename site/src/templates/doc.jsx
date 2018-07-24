import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import DocLink from '../components/doc-link';
import Page from '../templates/page';

import './doc.css';

const Template = ({ data }) => {
  const markdownFiles = data.allMarkdownRemark.edges;
  const { html, frontmatter } = data.markdownRemark;

  const DocLinks = markdownFiles.map(markdownFile => (<DocLink doc={markdownFile.node} />));

  return (
    <Page className="docs">
      <div className="sidebar">
        <h4>Menu</h4>
        <ul>{DocLinks}</ul>
      </div>
      <div className="body">
        <h2>{frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Page>
  );
};

Template.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
    markdownRemark: PropTypes.object,
  }).isRequired,
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
