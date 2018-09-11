import styled from 'styled-components';

export const DemoTransitionOpacity = styled.div`
  background: #ddd;
  padding: 1em;
  margin-bottom: 1em;
  text-align: center;
  border-radius: 0;
  cursor: pointer;
  max-width: 800px;
  transition: opacity var(--transition-time) var(--transition-function);
  &:hover {
    opacity: 0;
  }
`;

export const DemoTransitionMove = styled.div`
  background: #ddd;
  padding: 1em;
  margin-bottom: 1em;
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
    transition: left var(--transition-time) var(--transition-function);
  }
  &:hover:after {
    left: calc(100% - 8px);
  }
`;
