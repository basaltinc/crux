import styled from 'styled-components';

export const PatternGrid = styled.ul`
  display: flex;
  align-items: stretch;
  margin: ${props => props.theme.spacing.xl};
  padding: 0;
  list-style-type: none;
`;

export const PatternGridItem = styled.li`
  background: #fff;
  position: relative;
  transition: ${props => props.theme.transition.all};
  ${PatternGrid}:hover & {
    filter: blur(0.75px);
  }
  &:hover {
    filter: blur(0px) !important;
    z-index: 100;
  }
  > a:link,
  > a:visited {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: ${props => props.theme.fonts.families.avenirMedium};
    text-decoration: none;
    padding: ${props => props.theme.spacing.l} ${props => props.theme.spacing.l}
      0;
    height: 100%;
    border: solid 1px ${props => props.theme.colors.borders};
    border-radius: ${props => props.theme.border.radius};
    text-align: center;
    transition: ${props => props.theme.transition.all};
    position: relative;
    z-index: 100;
  }
  > a:hover {
    position: absolute;
    background: #fff;
    border-radius: ${props => props.theme.border.radius};
    border-color: ${props => props.theme.colors.type.component.base};
    transform: scale(1.05);
    width: 100%;
    height: auto;
    z-index: 200;
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
  ${PatternGridItem}:hover & {
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
  font-family: ${props => props.theme.fonts.families.avenirLight};
  line-height: 1.25;
  font-size: ${props => props.theme.fonts.sizes.s};
  color: #000;
  font-style: italic;
  padding: ${props => props.theme.spacing.l} 0 ${props => props.theme.spacing.l};
  max-width: 250px;
  margin: 0 auto;
  opacity: 0;
  height: 0;
  pointer-events: none;
  transition: all 0.1s ease-in-out;
  transform: scale(0.75);
  position: absolute;

  ${PatternGridItem} > a:hover & {
    opacity: 1;
    transform: scale(1);
    height: auto;
    position: relative;
  }
`;
