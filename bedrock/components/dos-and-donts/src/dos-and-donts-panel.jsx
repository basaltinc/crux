import React from 'react';
import PropTypes from 'prop-types';
import { DosAndDontsPanelStyled } from './dos-and-donts.styles';

export default function DosAndDontsPanel(props) {
  return (
    <DosAndDontsPanelStyled do={props.item.do}>
      <div>
        <img alt="" src={props.item.image} />
        <figcaption>
          <strong>{props.item.do ? 'Do: ' : "Don't: "}</strong>
          {props.item.caption}
        </figcaption>
      </div>
    </DosAndDontsPanelStyled>
  );
}

DosAndDontsPanel.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    caption: PropTypes.string,
    do: PropTypes.bool,
  }).isRequired,
};
