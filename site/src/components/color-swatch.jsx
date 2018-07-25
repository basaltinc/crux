import React from 'react';
import PropTypes from 'prop-types';

// export default class ColorSwatch extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           flexWrap: 'wrap',
//         }}
//       >
//         {Object.keys(colors).map(key => {
//           const value = colors[key];
//           const modifiers = Object.keys(value);
//           if (modifiers.length === 0) return null;
//
//           // Color Swatch Here
//
//         })}
//       </div>
//     );
//   }
// }



ColorSwatch.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }),
}
