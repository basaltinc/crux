import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Sidebar from '../components/sidebar';
import Page from '../templates/page';

import './doc.css';

const Template = ({ data }) => {
  const markdownFiles = data.allMarkdownRemark.edges;
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Page className="docs">
      <Sidebar files={markdownFiles}/>
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
            section
            definition
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
