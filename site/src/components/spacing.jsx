import React from 'react';
import PropTypes from 'prop-types';

const SpacingSwatch = ({ space }) => (
  <div
    key={space.name}
    style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      padding: '5px',
      border: 'solid 1px grey',
    }}
  >
    <div style={{ width: '6rem' }}>
      <div
        style={{
          height: space.value,
          width: space.value,
          border: 'dashed 1px grey',
        }}
      />
    </div>
    <div>
      Name: <code>{space.name}</code>
      <br />
      Value: <code>{space.value}</code>
    </div>
  </div>
);

/* eslint-disable no-useless-constructor, react/prefer-stateless-function */
export default class SpacingSwatches extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spaceSwatches = this.props.spaces.items.map(space => (
      <SpacingSwatch space={space} />
    ));

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
        }}
      >
        {spaceSwatches}
      </div>
    );
  }
}
/* eslint-enable no-useless-constructor react/prefer-stateless-function */

SpacingSwatch.propTypes = {
  space: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};

SpacingSwatches.propTypes = {
  spaces: PropTypes.arrayOf(PropTypes.object).isRequired,
};
