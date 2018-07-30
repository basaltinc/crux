import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Page from '../../templates/page';
import LinkList from '../../components/link-list';

const ResourcesPage = props => {
  const markdownFiles = props.data.allMarkdownRemark.edges;
  const navItems = markdownFiles.map(file => {
    return {
      name: file.node.frontmatter.title,
      path: file.node.frontmatter.path,
      id: file.node.id,
    };
  });

  return (
    <Page sidebarOne={<LinkList items={navItems} />}>
      <h2>Resources</h2>
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
