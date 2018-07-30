import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'; // eslint-disable-line

import LinkList from '../components/link-list';
import Page from '../templates/page';

import './doc.css';
import Twig from '../components/twig';

const Template = ({ data }) => {
  const markdownFiles = data.allMarkdownRemark.edges;
  const { html, frontmatter } = data.markdownRemark;
  const navItems = markdownFiles.map(file => {
    return {
      name: file.node.frontmatter.title,
      path: file.node.frontmatter.path,
      id: file.node.id,
    };
  });

  return (
    <Page className="docs" sidebarOne={<LinkList items={navItems} />}>
      <div className="body">
        {frontmatter.section && (
          <h4 className="eyebrow">{frontmatter.section}</h4>
        )}
        <h2>{frontmatter.title}</h2>
        {frontmatter.definition && (
          <div>
            <hr />
            <blockquote className="definition">
              {frontmatter.definition}
            </blockquote>
            <hr />
          </div>
        )}
        {frontmatter.demo && (
          <Twig
            template={frontmatter.demo.template}
            data={frontmatter.demo.data}
          />
        )}
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        section
      }
    }
  }
`;
