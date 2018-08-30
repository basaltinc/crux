import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DosAndDontsPanel from './dos-and-donts-panel';

const DoesAndDontsWrapper = styled.div`
  background-color: ${props => props.theme.colors.color.gray.xxlight};
  padding: 1rem 0;
  max-width: 1500px;
  margin: 1rem auto;
  @media (min-width: 450px) {
    display: flex;
    justify-content: space-between;
    padding: 0;
    & > * {
      width: 50%;
    }
  }
`;

const DosAndDonts = props => (
  <div>
    {props.title && <h4>{props.title}</h4>}
    {props.description && <p>{props.description}</p>}
    <DoesAndDontsWrapper>
      {props.items.map(item => (
        <DosAndDontsPanel key={item.image} item={item} />
      ))}
    </DoesAndDontsWrapper>
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
