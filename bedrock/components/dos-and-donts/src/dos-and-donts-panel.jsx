import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DosAndDontsPanelStyled = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    margin-bottom: 1rem;
    background-color: ${props => props.theme.colors.color.gray.xxlight};
    > img {
      border-bottom: solid 8px;
      border-bottom-color: ${props =>
        props.do
          ? props.theme.colors.color.status.success
          : props.theme.colors.color.status.error};
    }
    figcaption {
      text-align: left;
      padding-top: 1rem;
    }
  }
  strong {
    color: ${props =>
      props.do
        ? props.theme.colors.color.status.success
        : props.theme.colors.color.status.error};
  }
`;

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
