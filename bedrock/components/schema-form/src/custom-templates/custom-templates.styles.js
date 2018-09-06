import styled from 'styled-components';

export const CustomFieldWrapper = styled.div`
  padding: 0.25rem 0;
  > label {
    display: block;
    color: ${props => props.theme.form.label.color};
    font-size: ${props => props.theme.form.label['font-size']};
    font-weight: bold;
  }
  .field-radio-group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: ${props => props.theme.form.input.height};
    font-size: 18px;
    background-color: white;
    > div {
      display: inline-block;
    }
    span {
      display: flex;
      align-items: center;
    }
    .radio {
      margin-right: 13.5px;
    }
    input {
      margin-right: 8px;
    }
  }
`;