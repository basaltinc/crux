import styled from 'styled-components';

export const Button = styled.button`
  & {
    height: ${props => props.theme.buttons.height};
    border: ${props => props.theme.buttons.border};
    background-color: ${props =>
      props.primary
        ? props.theme.buttons.primary.background
        : props.theme.buttons.secondary.background};
    color: ${props =>
      props.primary
        ? props.theme.buttons.primary.color
        : props.theme.buttons.secondary.color};
    font-size: ${props => props.theme.buttons.fontSize};
    cursor: ${props => props.theme.buttons.cursor};
  }
`;

export const BlockQuoteWrapper = styled.blockquote`
  border: ${props => props.theme.blockquotes.border};
  border-left: ${props => props.theme.blockquotes.borderLeft};
  padding: ${props => props.theme.blockquotes.padding};
  position: relative;
  margin: ${props => props.theme.blockquotes.margin};
  // citiation styling
  footer {
    font-size: ${props => props.theme.blockquotes.citation.fontSize};
    color: ${props => props.theme.blockquotes.citation.color};
    margin: ${props => props.theme.blockquotes.citation.margin};
  }
  // Befor and After produce the quote glyphs
  ::before {
    content: '\\201C'; /*Unicode for Left Double Quote*/
    width: ${props => props.theme.blockquotes.glyph.width};
    /*Font*/
    font-family: ${props => props.theme.blockquotes.glyph.fontFamily};
    font-size: ${props => props.theme.blockquotes.glyph.size};
    opacity: ${props => props.theme.blockquotes.glyph.opacity};
    font-weight: bold;
    color: ${props => props.theme.blockquotes.glyph.color};
    /*Positioning*/
    position: absolute;
    left: 0px;
    top: -30px;
  }
  ::after {
    content: '\\201D'; /*Unicode for Right Double Quote*/
    width: ${props => props.theme.blockquotes.glyph.width};
    font-family: ${props => props.theme.blockquotes.glyph.fontFamily};
    font-size: ${props => props.theme.blockquotes.glyph.size};
    opacity: ${props => props.theme.blockquotes.glyph.opacity};
    font-weight: bold;
    color: ${props => props.theme.blockquotes.glyph.color};
    position: absolute;
    right: 10px;
    bottom: -85px;
  }
`;

export const Details = styled.details`
  padding: ${props => props.theme.details.padding};
  border-top: ${props => props.theme.details.borderTop};
  border-bottom: ${props => props.theme.details.borderBottom};
  margin: ${props => props.theme.details.margin};
  > summary {
    font-weight: ${props => props.theme.details.summary.fontWeight};
    font-size: ${props => props.theme.details.summary.fontSize};
    outline: none;
    user-select: none;
    &:hover {
      cursor: pointer;
    }
    &:active,
    &:focus {
      outline: none;
    }
  }
`;
