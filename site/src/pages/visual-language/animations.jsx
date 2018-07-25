import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Page from '../../templates/page';
import Sidebar from '../../components/sidebar';
import './animations.css';

const AnimationsPage = ({ data }) => {
  const markdownFiles = data.allMarkdownRemark.edges;

  return (
    <Page className="docs" sidebarOne={<Sidebar files={markdownFiles} />}>
      <div className="body">
        <h4 className="eyebrow">Visual Language</h4>
        <h2>Animation</h2>
        <hr />
        <blockquote>
          Animation offers a medium of story telling and visual entertainment which can bring pleasure and information to people of all ages everywhere in the world. - Walt Disney
        </blockquote>
        <hr />
        <div className="demo-transition transition-opacity"><strong>Opacity</strong> (Hover to see
          effect)
        </div>
        <div className="demo-transition transition-move"><strong>Move</strong> (Hover to see effect)
        </div>
      </div>
    </Page>
  );
};

export default AnimationsPage;

AnimationsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }).isRequired,
};

export const pageQuery = graphql`
  query SitePagesAnimation {
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
