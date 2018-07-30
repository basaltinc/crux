import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DosAndDontsPanelStyled = styled.figure`
  > img {
    border-bottom: solid 8px;
    border-bottom-color: ${props => (props.do ? 'green' : 'red')};
    margin-bottom: 1rem;
  }
  > span {
    color: ${props => (props.do ? 'green' : 'red')};
    font-weight: bold;
  }
`;

export default function DosAndDontsPanel(props) {
  return (
    <DosAndDontsPanelStyled key={props.item.image} do={props.item.do}>
      <img alt="" src={props.item.image} />
      <figcaption>
        <span>{props.item.do ? 'Do ' : "Don't "}</span>
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
  }),
};
