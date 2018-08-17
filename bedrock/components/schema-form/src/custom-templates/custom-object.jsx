import React from 'react';
import PropTypes from 'prop-types';

export default function ObjectFieldTemplate({
  TitleField,
  properties,
}) {
  return (
    <div>
      {properties.map(prop => (
        <div
          key={prop.content.key}
        >
          {prop.content}
        </div>
      ))}
    </div>
  );
}

ObjectFieldTemplate.propTypes = {
  TitleField: PropTypes.string,
  description: PropTypes.string,
  properties: PropTypes.array,
  title: PropTypes.string,
};
