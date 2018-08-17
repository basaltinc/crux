import React from 'react';
import styled from 'styled-components';

import { SelectWrapper, TextInputWrapper } from '@basalt/bedrock-atoms';
import info from '../assets/info-circle.svg';
import './custom-field.styles.css';

const CustomFieldWrapper = styled.div`
  padding: 0.25rem 0;
  > label {
    display: block;
    color: grey;
    font-size: 13.5px;
    font-weight: bold;
  }
`;

/* eslint-disable react/prop-types */
export default function CustomField(props) {
  const {
    id,
    classNames,
    label,
    help,
    required,
    description,
    errors,
    children,
  } = props;
  const fieldDescription = description.props.description;
  const inputSchema = children.props.schema;
  console.log(inputSchema);
  let inputContent = (<div/>);

  if (inputSchema.type === 'string' && inputSchema.enum) {
    inputContent = (<SelectWrapper>{children}</SelectWrapper>);
  } else if (inputSchema.type === 'string') {
    inputContent = (<TextInputWrapper>{children}</TextInputWrapper>);
  } else {
    inputContent = children;
  }
  /* eslint-disable no-alert, jsx-a11y/label-has-for */
  return (
    <CustomFieldWrapper className={classNames}>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? '*' : null}
      </label>
      {inputContent}
      {errors && errors}
      {help}
    </CustomFieldWrapper>
  );
}
