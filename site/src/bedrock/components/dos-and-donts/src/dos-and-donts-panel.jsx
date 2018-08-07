import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DosAndDontsPanelStyled = styled.figure`
  display: flex;
  flex-direction: column;
  > img {
    border-bottom: solid 8px;
    border-bottom-color: ${props => (props.do ? 'green' : 'red')};
    margin-bottom: 1rem;
    flex: 1 0 auto;
  }
  b {
    color: ${props => (props.do ? 'green' : 'red')};
  }
`;

export default function DosAndDontsPanel(props) {
  return (
    <DosAndDontsPanelStyled key={props.item.image} do={props.item.do}>
      <img alt="" src={props.item.image} />
      <figcaption>
        <b>{props.item.do ? 'Do: ' : "Don't: "}</b>
        {props.item.caption}
      </figcaption>
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
