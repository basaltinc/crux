import React from 'react';
import PropTypes from 'prop-types';
import DosAndDontsPanel from './dos-and-donts-panel';
import { DosAndDontsWrapper } from './dos-and-donts.styles';

const DosAndDonts = props => (
  <div>
    {props.title && <h4>{props.title}</h4>}
    {props.description && <p>{props.description}</p>}
    <DosAndDontsWrapper>
      {props.items.map(item => (
        <DosAndDontsPanel key={item.image} item={item} />
      ))}
    </DosAndDontsWrapper>
  </div>
);

DosAndDonts.defaultProps = {
  title: '',
  description: '',
};

DosAndDonts.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      caption: PropTypes.string,
      do: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default DosAndDonts;
