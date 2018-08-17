import React from 'react';
import styled from 'styled-components';

import info from '../assets/info-circle.svg';
import './custom-field.styles.css';

const CustomFieldWrapper = styled.div`
  > label {
    color: grey;
    font-size: 0.75rem;
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
  /* eslint-disable no-alert, jsx-a11y/label-has-for */
  return (
    <CustomFieldWrapper className={classNames}>
      <label htmlFor={id} className="field-label">{label}{required ? "*" : null}</label>
      {/*{description}*/}
      {children}
      {errors}
      {help}
    </CustomFieldWrapper>
  );
}
