import styled from 'styled-components';

export const TextInputWrapper = styled.div`
  > input,
  > textarea {
    box-sizing: border-box;
    padding: ${props => props.theme.form.input.padding};
    border: ${props => props.theme.form.input.border};
    background-color: white;
    font-size: ${props => props.theme.form.input.font_size};
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
      font-size: ${props => props.theme.form.input.font_size};
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
      font-size: ${props => props.theme.form.input.font_size};
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

export const Toggle = styled.div`
  p {
    display: none;
  }
  span {
    height: ${props => props.theme.form.input.height};
    display: flex;
    align-items: center;
  }
  
   input[type=checkbox]{
    height: 0;
    width: 0;
    visibility: hidden;
    display: none;
  }

  span {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 25px;
    background: ${props => props.theme.colors.neutral};
    display: block;
    border-radius: 50px;
    position: relative;
  }

  span:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 22px;
    transition: 0.3s;
  }

  input:checked + span {
    background: #E1C933;
  }

  input:checked + span:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 32px;
  }
}
  
`;
