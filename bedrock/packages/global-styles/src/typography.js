export const addGlobalTypography = theme => `
      .eyebrow {
        font-family: ${theme.eyebrow.font_family};
        color: ${theme.eyebrow.color};
        margin-bottom: 0;
      }
      h1, .h1 {
        font-family: ${theme.headings.font_family};
        margin: ${theme.headings.margin};
        line-height: ${theme.headings.line_height};
        font-size: ${theme.headings.h1.base};
      }
      h1:first-child, .h1:first-child {
        margin-top: 0;
      }
      h1:last-child, .h1:last-child {
        margin-bottom: 0;
      }
      @media (min-width: 380px) {
        h1, .h1 {
          font-size: ${theme.headings.h1.min_width_380};
        }
      }
      h2, .h2 {
        font-family: ${theme.headings.font_family};
        margin: ${theme.headings.margin};
        line-height: ${theme.headings.line_height};
        font-size: ${theme.headings.h2.base};
      }
      h2:first-child, .h2:first-child {
        margin-top: 0;
      }
      h2:last-child, .h2:last-child {
        margin-bottom: 0;
      }
      @media (min-width: 380px) {
        h2, .h2 {
          font-size: ${theme.headings.h2.min_width_380};
        }
      }
      h3, .h3 {
        font-family: ${theme.headings.font_family};
        margin: ${theme.headings.margin};
        line-height: ${theme.headings.line_height};
        font-size: ${theme.headings.h3.base};
      }
      h3:first-child, .h3:first-child {
        margin-top: 0;
      }
      h3:last-child, .h3:last-child {
        margin-bottom: 0;
      }
      @media (min-width: 380px) {
        h3, .h3 {
          font-size: ${theme.headings.h3.min_width_380};
        }
      }
      h4, .h4 {
        font-family: ${theme.headings.font_family};
        margin: ${theme.headings.margin};
        line-height: ${theme.headings.line_height};
        font-size: ${theme.headings.h4.base};
      }
      h4:first-child, .h4:first-child {
        margin-top: 0;
      }
      h4:last-child, .h4:last-child {
        margin-bottom: 0;
      }
      h5, .h5 {
        font-family: ${theme.headings.font_family};
        margin: ${theme.headings.margin};
        line-height: ${theme.headings.line_height};
        font-size: ${theme.headings.h5.base};
      }
      h5:first-child, .h5:first-child {
        margin-top: 0;
      }
      h5:last-child, .h5:last-child {
        margin-bottom: 0;
      }
      h6, .h6 {
        font-family: ${theme.headings.font_family};
        margin: ${theme.headings.margin};
        line-height: ${theme.headings.line_height};
        font-size: ${theme.headings.h6.base};
      }
      h6:first-child, .h6:first-child {
        margin-top: 0;
      }
      h6:last-child, .h6:last-child {
        margin-bottom: 0;
      }
      p {
        margin: ${theme.paragraphs.margin};
        font-family: ${theme.paragraphs.font_family};
      }
      p:last-child {
        margin-bottom: 0;
      }
      ul,
      ol {
        margin: ${theme.lists.margin};
      }
      li {
        margin: ${theme.lists.margin};
      }
      a, a:link, a:visited {
        color: ${theme.links.visited.color};
        text-decoration: ${theme.links.visited.textDecoration};
      }
      a:hover, a:focus, a:active {
        color: ${theme.links.hover.color};
        text-decoration: ${theme.links.hover.textDecoration};
      }
      b,
      strong {
        font-family: ${theme.fonts.families.avenir.medium};
      }
      blockquote {
        font-style: italic;
        border-left: ${theme.blockquote.border_left};
        margin:${theme.blockquote.margin};
        padding: ${theme.blockquote.padding};
      }
  `;
