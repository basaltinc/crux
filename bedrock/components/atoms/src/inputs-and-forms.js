import styled from 'styled-components';

export const TextInputWrapper = styled.div`
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

export const RadioInputWrapper = styled.div`
  .field-radio-group.field-radio-group {
    height: unset;
  }
  input {
    margin-right: 8px;
    + span {
      font-size: ${props => props.theme.form.input['font-size']};
    }
  }
`;

export const CheckboxInputWrapper = styled.div`
  p {
    display: none;
  }
  label {
    height: ${props => props.theme.form.input.height};
    display: flex;
    align-items: center;
  }
  input {
    margin-right: 8px;
    + span {
      font-size: ${props => props.theme.form.input['font-size']};
    }
  }
`;

export const FormIconButton = styled.div`
  display: inline-block;
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
`;

export const FormIconTray = styled.div`
  box-sizing: border-box;
  border: ${props => props.theme.form.border};
  display: inline-flex;
  padding: ${props => props.theme.form.padding};
  margin-top: 1rem;
`;

export const FormArrayItem = styled.div`
  margin: 0.75rem 0;
  &:last-child {
    margin-bottom: 0;
  }
  .field {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  & > * + * {
    //margin-left: 0.25rem;
  }
  &:not(:last-child) {
    padding-bottom: 0.75rem;
    border-bottom: 1px solid lightgrey;
  }
`;
