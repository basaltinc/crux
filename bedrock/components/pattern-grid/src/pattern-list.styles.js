import styled from 'styled-components';

export const PatternGridList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StyledPatternGridListItem = styled.li`
  margin-top: ${props => props.theme.spacing.m};
  border-left: 3px solid ${props => props.theme.colors.neutral_light};
  padding: ${props => props.theme.spacing.s} ${props => props.theme.spacing.m};
  width: 50%;
  display: inline-block;
  vertical-align: top;
  & > a {
    text-decoration: none;
    transition: ${props => props.theme.transition.all};
  }
`;

export const PatternGridListItemTitle = styled.h3`
  margin: 0;
`;

export const PatternGridListItemDescription = styled.div`
  font-family: ${props => props.theme.fonts.families.avenir.light};
  line-height: 1.25;
  font-size: ${props => props.theme.fonts.sizes.s};
  color: ${props => props.theme.colors.color.gray.dark};
  font-style: italic;
`;
