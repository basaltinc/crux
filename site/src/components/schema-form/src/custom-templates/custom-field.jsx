import React from 'react';
import info from './../assets/info-circle.svg';
import './custom-field.styles.css';

// @todo add prop types
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
      <div className="custom-field__title">
        <label
          className={`control-label${
            required ? ' custom-field__required' : ''
          }`}
          title={fieldDescription}
          htmlFor={id}
        >
          {label}
          {fieldDescription && (
            <div
              className="custom-field__info"
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
        </label>
      </div>
      {children}
      {errors}
      {help}
    </div>
  );
}
