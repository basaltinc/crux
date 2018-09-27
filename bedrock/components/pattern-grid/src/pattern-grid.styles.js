import styled from 'styled-components';

export const StyledPatternGridItem = styled.div`
  background: #fff;
  position: relative;
  width: 100%;
  transition: ${props => props.theme.transition.all};
  @media (min-width: ${props => props.theme.breakpoint.medium}) {
    .pattern-grid-wrapper:hover & {
      filter: blur(0.75px);
    }
    &:hover {
      filter: blur(0px) !important;
      z-index: 100;
    }
  }
  > a:link,
  > a:visited {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: ${props => props.theme.fonts.families.avenir.medium};
    text-decoration: none;
    padding: ${props => props.theme.spacing.l} ${props => props.theme.spacing.l}
      0;
    height: 100%;
    border: ${props => props.theme.borders.border};
    border-radius: ${props => props.theme.borders.radius};
    text-align: center;
    transition: ${props => props.theme.transition.all};
    position: relative;
    z-index: 100;
  }
  @media (min-width: ${props => props.theme.breakpoint.medium}) {
    > a:hover {
      position: absolute;
      background: #fff;
      border-radius: ${props => props.theme.borders.radius};
      border-color: ${props => props.theme.colors.type.component.base};
      transform: scale(1.15);
      width: 100%;
      height: auto;
      z-index: 200;
    }
  }
`;

export const PatternGridItemThumb = styled.img`
  display: block;
  max-width: 250px;
  width: 100%;
  max-height: 110px;
  margin: 0 auto 15px;
  filter: grayscale(75%);
  transition: ${props => props.theme.transition.all};
  ${StyledPatternGridItem}:hover & {
    filter: grayscale(0%);
  }
`;

export const PatternGridItemTitle = styled.span`
  color: #000;
  margin-bottom: -3px;
  border-bottom: 5px solid ${props => props.theme.colors.type.component.base};
  display: inline-block;
  transition: ${props => props.theme.transition.all};
`;

export const PatternGridItemDescription = styled.div`
  font-family: ${props => props.theme.fonts.families.avenir.light};
  line-height: 1.25;
  font-size: ${props => props.theme.fonts.sizes.s};
  color: #000;
  font-style: italic;
  padding: ${props => props.theme.spacing.m} 0 ${props => props.theme.spacing.m};
  max-width: 250px;
  margin: 0 auto;
  @media (min-width: ${props => props.theme.breakpoint.medium}) {
    padding: ${props => props.theme.spacing.l} 0
      ${props => props.theme.spacing.l};
    opacity: 0;
    height: 0;
    pointer-events: none;
    transform: scale(0.75);
    position: absolute;
    transition: all 0.1s ease-in-out;
    ${StyledPatternGridItem} > a:hover & {
      opacity: 1;
      transform: scale(1);
      height: auto;
      position: relative;
    }
  }
`;
