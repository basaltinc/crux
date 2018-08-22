import React from 'react';
import styled from 'styled-components';

import {
  CheckboxInputWrapper,
  SelectWrapper,
  TextInputWrapper,
  RadioInputWrapper,
} from '@basalt/bedrock-atoms';

const CustomFieldWrapper = styled.div`
  padding: 0.25rem 0;
  > label {
    display: block;
    color: grey;
    font-size: 13.5px;
    font-weight: bold;
  }
  .field-radio-group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 33px;
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
  const fieldDescription = description.props.description; /* eslint-disable-line */
  const inputSchema = children.props.schema;
  let inputContent = <div />;
  if (
    inputSchema.type === 'string' &&
    !!inputSchema.enum &&
    !inputSchema['ui:widget']
  ) {
    inputContent = <SelectWrapper>{children}</SelectWrapper>;
  } else if (inputSchema.type === 'string' && !!inputSchema.enum) {
    inputContent = <RadioInputWrapper>{children}</RadioInputWrapper>;
  } else if (inputSchema.type === 'string') {
    inputContent = <TextInputWrapper>{children}</TextInputWrapper>;
  } else if (inputSchema.type === 'boolean') {
    inputContent = <CheckboxInputWrapper>{children}</CheckboxInputWrapper>;
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
