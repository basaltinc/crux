import styled from 'styled-components';

export const HomeSplashWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const HomeSplashCore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  height: calc(100vh - 236px);
  padding: 2rem;
  text-align: right;
`;

export const EyeBrow = styled.h2`
  color: grey;
  margin: 0 0 -70px;
  font-size: 1.5rem;
  @media screen and (min-width: 700px) {
    margin: 0 0 -77px;
    font-size: 1.75rem;
  }
  @media screen and (min-width: 1000px) {
    margin: 0 0 -90px;
    font-size: 2.1rem;
  }
  @media screen and (min-width: 1300px) {
    margin: 0 0 -115px;
    font-size: 2.25rem;
  }
`;

export const Title = styled.h1`
  font-size: 12rem;
  margin: 0;
  @media screen and (min-width: 700px) {
    font-size: 14rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 16rem;
  }
  @media screen and (min-width: 1300px) {
    font-size: 18rem;
  }
`;

export const Subtitle = styled.h2`
  margin-top: -60px;
  font-size: 1.5rem;
  @media screen and (min-width: 700px) {
    margin-top: -70px;
    font-size: 1.75rem;
  }
  @media screen and (min-width: 1000px) {
    margin-top: -80px;
    font-size: 2rem;
  }
  @media screen and (min-width: 1300px) {
    font-size: 2.25rem;
    margin-top: -110px;
  }
`;

export const VersionTag = styled.p`
  margin-top: -20px;
`;
