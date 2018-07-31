import React from 'react';
import styled from 'styled-components';

import info from '../assets/info-circle.svg';
import './custom-field.styles.css';

const CustomTitleField = styled.div`
  display: inline-block;
  margin-bottom: 0.25rem;
  width: 300px;
  .field-object > & {
    display: none;
  }
  .field-array > & {
    display: none;
  }
`;

const CustomLabelField = styled.label`
  font-weight: bold;
  ${props =>
    props.required
      ? `
    position: relative;
    &:before {
      content: '*';
      color: red;
      position: absolute;
      left: -10px;
    }
  `
      : ''};
`;

const CustomInfoField = styled.div`
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 5px;
  float: right;
  background-size: contain;
  height: 15px;
  width: 15px;
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
  /* eslint-disable no-alert, jsx-a11y/label-has-for */
  return (
    <div className={classNames}>
      <CustomTitleField>
        <CustomLabelField
          title={fieldDescription}
          htmlFor={id}
          required={required}
        >
          {label}
        </CustomLabelField>
        {fieldDescription && (
          <CustomInfoField
            style={{
              backgroundImage: `url(${info})`,
            }}
            role="button"
            onClick={() => window.confirm(fieldDescription)}
            onKeyPress={() => window.confirm(fieldDescription)}
            title={fieldDescription}
            tabIndex="0"
          />
        )}
      </CustomTitleField>
      {children}
      {errors}
      {help}
    </div>
  );
}
