import styled from 'styled-components';

export const PostOrGet = styled.span`
  background-color: ${props =>
    props.requestType === 'get'
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  color: white;
  text-align: center;
  border-radius: ${props => props.theme.borders.radius};
  padding: 0.35rem 1rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;
