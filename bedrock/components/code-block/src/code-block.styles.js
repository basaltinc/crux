import styled from 'styled-components';

export const CodePreview = styled.pre`
  border-radius: 3px;
  white-space: pre-wrap;
  word-break: break-all;
  position: relative;
  margin: 0 0 0.75rem;
  && > code {
    padding: 1.75em;
    background: black;
    color: white;
    width: 100%;
    display: block;
    white-space: pre-wrap !important;
    word-wrap: break-word !important;
    border-radius: 0;
  }
  code {
    background: rgba(216, 216, 218, 0.8);
    padding: 0 3px;
    border-radius: 4px;
  }
  div > &:only-child {
    margin: 0;
  }
`;
