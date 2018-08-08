import styled from 'styled-components';

export const Details = styled.details`
  padding: 7px 0;
  border-top: solid 1px grey;
  border-bottom: solid 1px grey;
  margin-bottom: 10px;
  > summary {
    font-weight: bold;
    font-size: 1.1rem;
    &:hover {
      cursor: pointer;
    }
    &:active,
    &:focus {
      outline: none;
    }
  }
`;

export const TwoUp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.25rem;
  & > * {
    width: 48%;
  }
`;

export const SelectStyledWrapper = styled.div`
  height: 33px;
  overflow: hidden;
  background-color: #cfe3de;
  padding-right: 3px;
  > select {
    background: transparent;
    border: none;
    font-size: 1rem;
    height: 33px;
    padding: 5px; /* If you add too much padding here, the options won't show in IE */
    &:active,
    &:focus {
      outline: none;
    }
  }
`;
