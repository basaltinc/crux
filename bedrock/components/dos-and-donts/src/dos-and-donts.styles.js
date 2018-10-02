import styled from 'styled-components';

export const DosAndDontsPanelStyled = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    margin-bottom: 1rem;
    background-color: ${props => props.theme.globals.colors.neutralXLight};
    > img {
      border-bottom: solid 8px;
      max-width: 100%;
      height: auto;
      border-bottom-color: ${props =>
        props.do
          ? props.theme.status.successColor
          : props.theme.status.errorColor};
    }
    figcaption {
      text-align: left;
      padding-top: 1rem;
    }
  }
  strong {
    color: ${props =>
      props.do
        ? props.theme.status.successColor
        : props.theme.status.errorColor};
  }
`;

export const DosAndDontsWrapper = styled.div`
  background-color: ${props => props.theme.globals.colors.neutralXLight};
  padding: 1rem 0;
  max-width: 1500px;
  margin: 1rem auto;
  @media (min-width: 450px) {
    display: flex;
    justify-content: space-between;
    padding: 0;
    & > * {
      max-width: 50%;
    }
  }
`;
