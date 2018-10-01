import styled from 'styled-components';

export const ColorContrastPlayground = styled.div`
  max-width: 100%;
  margin-bottom: 10px;
  padding: 2rem;
  border: ${props => props.theme.borders.border};
  text-align: center;
  background-color: ${props => (props.bgColor ? props.bgColor : 'none')};
`;

export const AccessabilityDropdowns = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const AccessibilityInfo = styled.div`
  p {
    display: inline-block;
    margin: 0.5rem 1rem;
  }
`;

export const AccessibilityResults = styled.span`
  background-color: ${props =>
    props.pass === 'pass'
      ? props.theme.status.successColor
      : props.theme.status.errorColor};
  color: white;
  text-align: center;
  border-radius: ${props => props.theme.borders.radius};
  font-weight: bold;
  display: inline;
  padding: 0.35rem 0.75rem;
`;

export const Ratio = styled.span`
  border: 1px solid
    ${props =>
      props.ratio > '4.5'
        ? props.theme.status.successColor
        : props.theme.status.errorColor};
  color: ${props =>
    props.ratio > '4.5'
      ? props.theme.status.successColor
      : props.theme.status.errorColor};
  text-align: center;
  border-radius: ${props => props.theme.borders.radius};
  font-weight: bold;
  display: inline;
  padding: 0.35rem 1rem;
`;

export const LargeText = styled.h3`
  font-weight: bold;
  color: ${props => props.color};
`;

export const SmallText = styled.h5`
  color: ${props => props.color};
  font-weight: normal;
`;

export const ColorContrast = styled.div``;
export const ContrastWrapper = styled.div`
  margin: 0 auto;
  max-width: 1500px;
`;

export const ContrastInner = styled.div`
  display: grid;
  grid-template-columns: 75px 75px 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(2, auto);
  margin: 2rem 0;
  > h3 {
    grid-column: 1 / span 3;
    grid-row: 1 / 2;
    margin: auto 0;
  }
  .col {
    font-size: 1.3rem;
    margin: auto 0;
    &--1 {
      grid-column: 4 / 5;
    }
    &--2 {
      grid-column: 5 / 6;
    }
    &--3 {
      grid-column: 6 / 7;
    }
    &--4 {
      grid-column: 7 / 8;
    }
    &--5 {
      grid-column: 8 / 9;
    }
  }
`;

export const ColorBlock = styled.div`
  background-color: ${props => (props.color ? props.color : 'auto')};
  grid-column: 1 / span 2;
  grid-row: 2 / -1;
`;

export const RowWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  display: grid;
  padding: 0;
  grid-template-columns: 75px 75px 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const Fade = styled.div`
  grid-column: 2 / 4;
  background-color: ${props => (props.color2 ? props.color2 : 'auto')};
  background: linear-gradient(
    to right,
    ${props => (props.color2 ? props.color2 : 'auto')} 40%,
    transparent 80%
  );
`;

export const Results = styled.p``;

export const ColorCompare = styled.div`
  height: 50px;
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: 75px 75px 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column: 1 / -1;
  p {
    margin: auto 0;
  }
  p:nth-of-type(1) {
    grid-column: 4 / 5;
  }
  p:nth-of-type(2) {
    grid-column: 5 / 6;
  }
  p:nth-of-type(3) {
    grid-column: 6 / 7;
  }
  p:nth-of-type(4) {
    grid-column: 7 / 8;
  }
  p:nth-of-type(5) {
    grid-column: 8 / 9;
  }
`;
