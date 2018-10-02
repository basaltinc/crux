import styled from 'styled-components';

export const TypeToFilterInputWrapper = styled.div`
  display: flex;
  > input,
  > textarea {
    box-sizing: border-box;
    padding: ${props => props.theme.inputs.padding};
    border: ${props => props.theme.inputs.border};
    background-color: white;
    font-size: ${props => props.theme.inputs.fontSize};
    width: 100%;
  }
  > input {
    height: ${props => props.theme.inputs.height};
  }
`;

export const TypeToFilter = styled.div`
  > .eyebrow {
    margin-top: 0;
    font-weight: bold;
  }
  position: relative;
  margin-bottom: 2rem;
`;

export const ClearFilterButton = styled.div`
  border: ${props => props.theme.inputs.border};
  border-left: none;
  height: ${props => props.theme.inputs.height};
  width: 33px;
  flex-shrink: 0;
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  > i {
    opacity: 0.5;
  }
`;
