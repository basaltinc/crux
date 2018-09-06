import styled from 'styled-components';

export const ColorContrastPlayground = styled.div`
  max-width: 100%;
  margin-bottom: 10px;
  padding: 2rem;
  border: solid 1px ${props => props.theme.colors.borders};
  text-align: center;
  background-color: ${props => (props.bgColor ? props.bgColor : 'none')};
`;

export const AccessabilityDropdowns = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const AccessibilityInfo = styled.div`
  p {
    display: inline-block;
    margin: 0.5rem 1rem;
  }
`;

export const AccessibilityResults = styled.span`
  background-color: ${props =>
    props.pass === 'pass'
      ? props.theme.colors.color.status.success
      : props.theme.colors.color.status.error};
  color: white;
  text-align: center;
  border-radius: ${props => props.theme.border.radius};
  font-weight: bold;
  display: inline;
  padding: 0.35rem 0.75rem;
`;

export const Ratio = styled.span`
  border: 1px solid
    ${props =>
      props.ratio > '4.5'
        ? props.theme.colors.color.status.success
        : props.theme.colors.color.status.error};
  color: ${props =>
    props.ratio > '4.5'
      ? props.theme.colors.color.status.success
      : props.theme.colors.color.status.error};
  text-align: center;
  border-radius: ${props => props.theme.border.radius};
  font-weight: bold;
  display: inline;
  padding: 0.35rem 1rem;
`;

export const LargeText = styled.h3`
  font-weight: bold;
  color: ${props => props.color};
`;

export const SmallText = styled.h5`
  color: ${props => props.color};
  font-weight: normal;
`;
