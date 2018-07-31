import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'; // eslint-disable-line
import styled from 'styled-components';

import LinkList from '../components/link-list';
import Page from '../templates/page';
import Twig from '../components/twig';

const DocsPage = styled(Page)`
  display: flex;
  width: 100%;
`;

const DocsBody = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
  h2 {
    margin: 0 0 0.25rem;
  }
`;

const Eyebrow = styled.h4`
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
`;

const Template = ({ data }) => {
  const markdownFiles = data.allMarkdownRemark.edges;
  const { html, frontmatter } = data.markdownRemark;
  const navItems = markdownFiles.map(file => ({
    name: file.node.frontmatter.title,
    path: file.node.frontmatter.path,
    id: file.node.id,
  }));

  return (
    <DocsPage sidebarOne={<LinkList items={navItems} />}>
      <DocsBody>
        {frontmatter.section && <Eyebrow>{frontmatter.section}</Eyebrow>}
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
      </DocsBody>
    </DocsPage>
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
