import styled from 'styled-components';

export const Button = styled.button`
  & {
    height: 33px;
    border: none;
    background-color: ${props =>
      props.primary ? props.theme.colors.primary : props.theme.colors.neutral};
    color: ${props => (props.primary ? 'white' : 'black')};
    font-size: 0.75rem;
  }
`;

export const BlockQuoteWrapper = styled.blockquote`
  border: ${props => props.theme.blockquote.border};
  border-left: ${props => props.theme.blockquote['border-left']};
  padding: ${props => props.theme.blockquote.padding};
  position: relative;
  margin: ${props => props.theme.blockquote.margin};
  footer {
    font-size: 0.8em;
    color: ${props => props.theme.colors.color.gray.light};
    margin-top: 0.5rem;
  }
  ::before {
    content: '\\201C'; /*Unicode for Left Double Quote*/
    width: ${props => props.theme.blockquote.glyph.width};
    /*Font*/
    font-family: ${props => props.theme.blockquote.glyph.font};
    font-size: ${props => props.theme.blockquote.glyph.size};
    opacity: ${props => props.theme.blockquote.glyph.opacity};
    font-weight: bold;
    color: ${props => props.theme.blockquote.glyph.color};

    /*Positioning*/
    position: absolute;
    left: 0px;
    top: -30px;
  }
  ::after {
    content: '\\201D'; /*Unicode for Right Double Quote*/
    width: ${props => props.theme.blockquote.glyph.width};
    font-family: ${props => props.theme.blockquote.glyph.font};
    font-size: ${props => props.theme.blockquote.glyph.size};
    opacity: ${props => props.theme.blockquote.glyph.opacity};
    font-weight: bold;
    color: ${props => props.theme.blockquote.glyph.color};
    position: absolute;
    right: 10px;
    bottom: -85px;
  }
`;

export const Details = styled.details`
  padding: 7px 0;
  border-top: solid 1px ${props => props.theme.colors.color.gray.dark};
  border-bottom: solid 1px ${props => props.theme.colors.color.gray.dark};
  margin-bottom: 10px;
  > summary {
    font-weight: bold;
    outline: none;
    user-select: none;
    font-size: 1.1rem;
    &:hover {
      cursor: pointer;
    }
    &:active,
    &:focus {
      outline: none;
    }
  }
`;
