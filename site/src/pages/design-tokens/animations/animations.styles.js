import styled from 'styled-components';

export const DemoTransitionOpacity = styled.div`
  background: ${props => props.theme.colors.neutral_light};
  padding: ${props => props.theme.spacing.m};
  margin-bottom: ${props => props.theme.spacing.m};
  text-align: center;
  border-radius: 0;
  cursor: pointer;
  max-width: 800px;
  transition: opacity ${props => props.theme.transition.speed_and_function};
  &:hover {
    opacity: 0;
  }
`;

export const DemoTransitionMove = styled.div`
  background: ${props => props.theme.colors.neutral_light};
  padding: ${props => props.theme.spacing.m};
  margin-bottom: ${props => props.theme.spacing.m};
  text-align: center;
  border-radius: 0;
  cursor: pointer;
  max-width: 800px;
  position: relative;
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 3px;
    top: 0;
    left: 8px;
    bottom: 0;
    background: black;
    transition: left ${props => props.theme.transition.speed_and_function};
  }
  &:hover:after {
    left: calc(100% - 8px);
  }
`;
