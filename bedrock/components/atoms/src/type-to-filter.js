import styled from 'styled-components';


export const TypeToFilterInputWrapper = styled.div`
  display: flex;
  > input,
  > textarea {
    box-sizing: border-box;
    padding: ${props => props.theme.form.input.padding};
    border: ${props => props.theme.form.input.border};
    background-color: white;
    font-size: ${props => props.theme.form.input['font-size']};
    width: 100%;
  }
  > input {
    height: ${props => props.theme.form.input.height};
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
  border: solid 1px ${props => props.theme.form.border};
  border-left: none;
  height: ${props => props.theme.form.input.height};
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
