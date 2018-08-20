import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DosAndDontsPanelStyled = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    margin-bottom: 1rem;
    background-color: #f6f6f6;
    > img {
      border-bottom: solid 8px;
      border-bottom-color: ${props => (props.do ? 'green' : 'red')};
    }
    figcaption {
      text-align: left;
      padding-top: 1rem;
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
        <figcaption>
          <b>{props.item.do ? 'Do: ' : "Don't: "}</b>
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
