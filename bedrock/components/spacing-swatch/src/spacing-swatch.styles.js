import styled from 'styled-components';

export const SpacingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  &:nth-child(2n) {
    background-color: #f2f3f3;
  }
  span + div {
    width: 75%;
  }
  h5 {
    margin: 0;
    font-weight: normal;
  }
`;

export const SpacingOuter = styled.span`
  box-sizing: border-box;
  border: 1px solid black;
  background-color: ${props => props.color};
  height: ${props => props.space};
  width: ${props => props.space};
`;
