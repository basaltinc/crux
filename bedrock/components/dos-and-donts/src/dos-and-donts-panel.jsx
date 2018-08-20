import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DosAndDontsPanelStyled = styled.figure`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 1rem;
    flex: 1 0 auto;
    background-color: white;
    text-align: center;
    border-bottom: solid 8px;
    border-bottom-color: ${props => (props.do ? 'green' : 'red')};

    > img {
    }
  }
  b {
    color: ${props => (props.do ? 'green' : 'red')};
  }
`;

export default function DosAndDontsPanel(props) {
  return (
    <DosAndDontsPanelStyled do={props.item.do}>
      <div>
        <img alt="" src={props.item.image} />
      </div>
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
