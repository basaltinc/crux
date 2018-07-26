import React from 'react';
import Page from '../../templates/page';
import Sidebar from '../../components/sidebar';

const ResourcesPage = props => {
  const markdownFiles = props.data.allMarkdownRemark.edges;

  return (
    <Page sidebarOne={<Sidebar files={markdownFiles} />}>
      <h3>Resources</h3>
    </Page>
  );
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
