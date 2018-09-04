import styled from 'styled-components';

export const DosAndDontsPanelStyled = styled.figure`
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

export const DosAndDontsWrapper = styled.div`
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
