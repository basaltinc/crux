import React from 'react';
import PropTypes from 'prop-types';

export default function ObjectFieldTemplate({ properties }) {
  return (
    <div className="custom-object">
      {properties.map(prop => (
        <div key={prop.content.key} className="custom-object-item">
          {prop.content}
        </div>
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
