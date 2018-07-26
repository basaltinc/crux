import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Page from '../../templates/page';
import Sidebar from '../../components/sidebar';
import BugReport from '../../components/bug-report';

const ResourcesPage = props => {
  const markdownFiles = props.data.allMarkdownRemark.edges;

  return (
    <Page sidebarOne={<Sidebar files={markdownFiles} />}>
      <h2>Resources</h2>
      <BugReport />
    </Page>
  );
};

ResourcesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }).isRequired,
};

export default ResourcesPage;

export const pageQuery = graphql`
  query SitePagesResourcesIndex {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            order
            section
          }
        }
      }
    }
  }
`;
