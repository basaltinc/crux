import React from 'react';
import PropTypes from 'prop-types';
import { SpacingOuter, SpacingWrapper } from './spacing-swatch.styles';

const SpacingSwatch = ({ space }) => (
  <SpacingWrapper>
    <SpacingOuter>
      <div
        style={{
          height: space.value,
          width: space.value,
          border: 'dashed 1px grey',
        }}
      />
    </SpacingOuter>
    <div>
      Name: <code>{space.name}</code>
      <br />
      Value: <code>{space.value}</code>
    </div>
  </SpacingWrapper>
);

/* eslint-disable no-useless-constructor, react/prefer-stateless-function */
export default class SpacingSwatches extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spaceSwatches = this.props.spaces.map(space => (
      <SpacingSwatch key={space.name} space={space} />
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
