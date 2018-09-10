import styled, { keyframes } from 'styled-components';
import SchemaForm from '@basalt/bedrock-schema-form';

// index.js

export const MainContent = styled.div`
  flex-grow: 1;
  padding: var(--spacing-l);
  overflow-y: scroll;
  box-sizing: border-box;
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 175px);
  max-width: 100vw;
  // @todo fix this temp workaround for negatting the "MainContent" padding
  margin: calc(-1 * var(--spacing-l));
`;

export const StartInsertSlice = styled.div`
  display: ${props => (props.hasVisibleControls ? 'block' : 'none')};
  border: ${props =>
    props.isActive ? 'solid 2px #e1c933' : 'dashed 1px rgba(0,0,0,0.3)'};
  text-align: center;
  cursor: pointer;
  padding: 1rem;
  margin: 1rem 0;
  transition: all 0.3s ease;
  &:hover,
  &:active {
    color: #e1c933;
    border: ${props => !props.isActive && 'dashed 1px #e1c933'};
    text-decoration: underline;
  }
`;

// playground-sidebar.jsx

export const PatternListItemWrapper = styled.li`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin: 1.5rem 0;
  img {
    width: 50px;
    height: 50px;
  }
  > div {
    &:hover,
    &:active {
      cursor: pointer;
    }
  }
  a {
    font-size: 13.5px;
  }
`;

export const PlaygroundStyledSchemaForm = styled(SchemaForm)`
  > div > label {
    display: none;
  }
  margin-bottom: 1rem;
`;

// playground-slice.jsx

export const PlaygroundIcon = styled.div`
  display: block;
  transition: all 0.3s ease;
  width: 21px;
  height: 21px;
  background-size: contain;
  position: relative;
  cursor: ${props => (props.active ? 'pointer' : 'auto')};
  &::after {
    background: ${props =>
      props.backgroundImage ? props.backgroundImage : ''};
    background-size: contain;
    opacity: ${props => (props.active ? 1 : 0.25)};
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
  }
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  &:hover,
  &:active {
    cursor: ${props => (props.disabled ? '' : 'pointer')};
  }
  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const briefHighlight = keyframes`
  from {
    box-shadow: 0 0 1.5rem #e1c933;
  } to {
    box-shadow: none;
  }
`;

export const PlaygroundIconWrapper = styled.div`
  box-sizing: border-box;
  border: ${props => props.theme.form.border};
  margin-bottom: 0;
  display: ${props => (props.hasVisibleControls ? 'block' : 'none')};
  height: 100%;
  text-align: center;
  padding: 0.5rem;
  margin-left: 1rem;
`;

export const PlaygroundSliceWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  box-sizing: border-box;
  border: solid 2px ${props => (props.active ? '#e1c933' : 'rgba(0,0,0,0)')};
  ${props =>
    props.hasVisibleControls ? 'padding: 5px;' : 'margin-bottom: 1.5rem;'};
  ${props => props.isChanged && `animation: ${briefHighlight} 1.5s`};
`;
