import React from 'react';
import {
  RadioInputWrapper,
  SelectStyledWrapper,
  TextInputWrapper,
  Toggle,
  Tooltip,
} from '@basalt/bedrock-atoms';
import { CustomFieldWrapper, InfoIcon } from './custom-templates.styles';

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
  let inputContent = <div />;
  const uiSchema = children.props.uiSchema ? children.props.uiSchema : {};
  if (
    inputSchema.type === 'string' &&
    !!inputSchema.enum &&
    !!uiSchema['ui:widget']
  ) {
    inputContent = <RadioInputWrapper>{children}</RadioInputWrapper>;
  } else if (inputSchema.type === 'string' && !!inputSchema.enum) {
    inputContent = (
      <SelectStyledWrapper>
        <span>{children}</span>
      </SelectStyledWrapper>
    );
  } else if (inputSchema.type === 'string' || inputSchema.type === 'integer') {
    inputContent = <TextInputWrapper>{children}</TextInputWrapper>;
  } else if (
    inputSchema.type === 'boolean' ||
    uiSchema['ui:widget'] === 'checkboxes'
  ) {
    inputContent = <Toggle>{children}</Toggle>;
  } else {
    inputContent = children;
  }

  /* eslint-disable no-alert, jsx-a11y/label-has-for */
  return (
    <CustomFieldWrapper className={classNames}>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? '*' : null}
        {fieldDescription && (
          <Tooltip tooltipContent={fieldDescription} position="top">
            <InfoIcon />
          </Tooltip>
        )}
      </label>
      {inputContent}
      {errors && errors}
      {help}
    </CustomFieldWrapper>
  );
}
