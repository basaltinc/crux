import React from 'react';
import PropTypes from 'prop-types';

export default function ObjectFieldTemplate({ properties }) {
  return (
    <div>
      {properties.map(prop => (
        <div key={prop.content.key}>{prop.content}</div>
      ))}
    </div>
  );
}

ObjectFieldTemplate.defaultProps = {
  properties: [],
};

ObjectFieldTemplate.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.object),
};
