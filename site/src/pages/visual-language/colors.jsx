import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../templates/page';
import Sidebar from '../../components/sidebar';
import ColorSwatches from '../../components/color-swatch';
import { graphql } from 'gatsby';

// @todo Get colors from the manifest when the manifest is built
const colors = {
  "items": [
    {
      "name": "$c-blue--light",
      "value": "hsl(165, 26%, 85%)",
      "comment": ""
    },
    {
      "name": "$c-blue",
      "value": "hsl(200, 55%, 19%)",
      "comment": ""
    },
    {
      "name": "$c-green",
      "value": "hsl(159, 20%, 17%)",
      "comment": ""
    },
    {
      "name": "$c-iron",
      "value": "hsl(240, 3%, 85%)",
      "comment": ""
    },
    {
      "name": "$c-yellow",
      "value": "hsl(52, 74%, 54%)",
      "comment": ""
    },
    {
      "name": "$c-white",
      "value": "white",
      "comment": ""
    },
    {
      "name": "$c-gray--dark",
      "value": "hsl(0, 0%, 40%)",
      "comment": ""
    },
    {
      "name": "$c-black",
      "value": "black",
      "comment": ""
    }
  ],
  "meta": {
    "description": "To add to these items, use Sass variables that start with <code>$c-</code> in <code>pattern-lab/source/_patterns/00-styleguide/05-colors/_color-vars.scss</code>"
  }
};

const ColorsPage = ({ data }) => {
  const markdownFiles = data.allMarkdownRemark.edges;

  return (
    <Page className="docs" sidebarOne={<Sidebar files={markdownFiles} />}>
      <div className="body">
        <h4 className="eyebrow">Visual Language</h4>
        <h2>Colors</h2>
        <hr/>
        <blockquote>
          Mere colour, unspoiled by meaning, and unallied with definite form, can speak to the soul in a thousand different ways. - Oscar Wilde
        </blockquote>
        <hr/>
        <p>Color is a defining element of any strong brand identity. Dedicated use of the Basalt palette with reinforce the cohesiveness of the brand and visually communicates your brand personality with your audience.</p>
        <p>The Basalt palette is a 5 color structure that contains two light tones, two dark tones and a brighter spot color. Together they channel natural elements while staying energetic and active creating balance and speaking to the Basalt brand story.</p>
        <p>Each color has a Sass variable and two utility classes. For example, $c-blue has : .u-c-blue for color and .u-bg-blue for background-color.</p>
        <ColorSwatches colors={colors}></ColorSwatches>
      </div>
    </Page>
  );
};

export default ColorsPage;

export const pageQuery = graphql`
  query SitePages {
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
