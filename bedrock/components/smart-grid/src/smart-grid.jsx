import styled from "styled-components";

export const SmartGrid = styled.div`
  & > * {
    margin-bottom: 1rem;
  }

  & > *:last-child {
    margin-bottom: 1rem;
  }

  & > *[class]:last-child {
    margin-bottom: 1rem;
  }

  @media (min-width: 380px) {
    &[data-row-items-xsmall="1"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-xsmall="1"] > * {
      margin-bottom: 1rem;
      width: 100%;
    }
    &[data-row-items-xsmall="1"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-xsmall="1"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-xsmall="1"] > *:nth-child(1n) {
      margin-right: 0;
    }
  }

  @media (min-width: 380px) {
    &[data-row-items-xsmall="2"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-xsmall="2"] > * {
      margin-bottom: 1rem;
      width: calc((50% + 0.5rem) - 1rem);
    }
    &[data-row-items-xsmall="2"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-xsmall="2"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-xsmall="2"] > *:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: 380px) {
    &[data-row-items-xsmall="3"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-xsmall="3"] > * {
      margin-bottom: 1rem;
      width: calc((33.33333% + 0.33333rem) - 1rem);
    }
    &[data-row-items-xsmall="3"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-xsmall="3"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-xsmall="3"] > *:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (min-width: 380px) {
    &[data-row-items-xsmall="4"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-xsmall="4"] > * {
      margin-bottom: 1rem;
      width: calc((25% + 0.25rem) - 1rem);
    }
    &[data-row-items-xsmall="4"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-xsmall="4"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-xsmall="4"] > *:nth-child(4n) {
      margin-right: 0;
    }
  }

  @media (min-width: 380px) {
    &[data-row-items-xsmall="6"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-xsmall="6"] > * {
      margin-bottom: 1rem;
      width: calc((16.66667% + 0.16667rem) - 1rem);
    }
    &[data-row-items-xsmall="6"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-xsmall="6"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-xsmall="6"] > *:nth-child(6n) {
      margin-right: 0;
    }
  }

  @media (min-width: 450px) {
    &[data-row-items-small="1"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-small="1"] > * {
      margin-bottom: 1rem;
      width: 100%;
    }
    &[data-row-items-small="1"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-small="1"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-small="1"] > *:nth-child(1n) {
      margin-right: 0;
    }
  }

  @media (min-width: 450px) {
    &[data-row-items-small="2"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-small="2"] > * {
      margin-bottom: 1rem;
      width: calc((50% + 0.5rem) - 1rem);
    }
    &[data-row-items-small="2"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-small="2"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-small="2"] > *:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: 450px) {
    &[data-row-items-small="3"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-small="3"] > * {
      margin-bottom: 1rem;
      width: calc((33.33333% + 0.33333rem) - 1rem);
    }
    &[data-row-items-small="3"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-small="3"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-small="3"] > *:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (min-width: 450px) {
    &[data-row-items-small="4"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-small="4"] > * {
      margin-bottom: 1rem;
      width: calc((25% + 0.25rem) - 1rem);
    }
    &[data-row-items-small="4"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-small="4"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-small="4"] > *:nth-child(4n) {
      margin-right: 0;
    }
  }

  @media (min-width: 450px) {
    &[data-row-items-small="6"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-small="6"] > * {
      margin-bottom: 1rem;
      width: calc((16.66667% + 0.16667rem) - 1rem);
    }
    &[data-row-items-small="6"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-small="6"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-small="6"] > *:nth-child(6n) {
      margin-right: 0;
    }
  }

  @media (min-width: 700px) {
    &[data-row-items-medium="1"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-medium="1"] > * {
      margin-bottom: 1rem;
      width: 100%;
    }
    &[data-row-items-medium="1"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-medium="1"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-medium="1"] > *:nth-child(1n) {
      margin-right: 0;
    }
  }

  @media (min-width: 700px) {
    &[data-row-items-medium="2"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-medium="2"] > * {
      margin-bottom: 1rem;
      width: calc((50% + 0.5rem) - 1rem);
    }
    &[data-row-items-medium="2"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-medium="2"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-medium="2"] > *:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: 700px) {
    &[data-row-items-medium="3"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-medium="3"] > * {
      margin-bottom: 1rem;
      width: calc((33.33333% + 0.33333rem) - 1rem);
    }
    &[data-row-items-medium="3"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-medium="3"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-medium="3"] > *:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (min-width: 700px) {
    &[data-row-items-medium="4"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-medium="4"] > * {
      margin-bottom: 1rem;
      width: calc((25% + 0.25rem) - 1rem);
    }
    &[data-row-items-medium="4"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-medium="4"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-medium="4"] > *:nth-child(4n) {
      margin-right: 0;
    }
  }

  @media (min-width: 700px) {
    &[data-row-items-medium="6"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-medium="6"] > * {
      margin-bottom: 1rem;
      width: calc((16.66667% + 0.16667rem) - 1rem);
    }
    &[data-row-items-medium="6"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-medium="6"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-medium="6"] > *:nth-child(6n) {
      margin-right: 0;
    }
  }

  @media (min-width: 900px) {
    &[data-row-items-large="1"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-large="1"] > * {
      margin-bottom: 1rem;
      width: 100%;
    }
    &[data-row-items-large="1"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-large="1"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-large="1"] > *:nth-child(1n) {
      margin-right: 0;
    }
  }

  @media (min-width: 900px) {
    &[data-row-items-large="2"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-large="2"] > * {
      margin-bottom: 1rem;
      width: calc((50% + 0.5rem) - 1rem);
    }
    &[data-row-items-large="2"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-large="2"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-large="2"] > *:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: 900px) {
    &[data-row-items-large="3"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-large="3"] > * {
      margin-bottom: 1rem;
      width: calc((33.33333% + 0.33333rem) - 1rem);
    }
    &[data-row-items-large="3"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-large="3"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-large="3"] > *:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (min-width: 900px) {
    &[data-row-items-large="4"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-large="4"] > * {
      margin-bottom: 1rem;
      width: calc((25% + 0.25rem) - 1rem);
    }
    &[data-row-items-large="4"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-large="4"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-large="4"] > *:nth-child(4n) {
      margin-right: 0;
    }
  }

  @media (min-width: 900px) {
    &[data-row-items-large="6"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-large="6"] > * {
      margin-bottom: 1rem;
      width: calc((16.66667% + 0.16667rem) - 1rem);
    }
    &[data-row-items-large="6"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-large="6"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-large="6"] > *:nth-child(6n) {
      margin-right: 0;
    }
  }

  @media (min-width: 1100px) {
    &[data-row-items-xlarge="1"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-xlarge="1"] > * {
      margin-bottom: 1rem;
      width: 100%;
    }
    &[data-row-items-xlarge="1"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-xlarge="1"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-xlarge="1"] > *:nth-child(1n) {
      margin-right: 0;
    }
  }

  @media (min-width: 1100px) {
    &[data-row-items-xlarge="2"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-xlarge="2"] > * {
      margin-bottom: 1rem;
      width: calc((50% + 0.5rem) - 1rem);
    }
    &[data-row-items-xlarge="2"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-xlarge="2"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-xlarge="2"] > *:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: 1100px) {
    &[data-row-items-xlarge="3"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-xlarge="3"] > * {
      margin-bottom: 1rem;
      width: calc((33.33333% + 0.33333rem) - 1rem);
    }
    &[data-row-items-xlarge="3"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-xlarge="3"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-xlarge="3"] > *:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (min-width: 1100px) {
    &[data-row-items-xlarge="4"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-xlarge="4"] > * {
      margin-bottom: 1rem;
      width: calc((25% + 0.25rem) - 1rem);
    }
    &[data-row-items-xlarge="4"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-xlarge="4"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-xlarge="4"] > *:nth-child(4n) {
      margin-right: 0;
    }
  }

  @media (min-width: 1100px) {
    &[data-row-items-xlarge="6"] {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    &[data-row-items-xlarge="6"] > * {
      margin-bottom: 1rem;
      width: calc((16.66667% + 0.16667rem) - 1rem);
    }
    &[data-row-items-xlarge="6"] > *:last-child {
      margin-bottom: 1rem;
    }
    &[data-row-items-xlarge="6"] > *:nth-child(1n) {
      margin-right: 1rem;
    }
    &[data-row-items-xlarge="6"] > *:nth-child(6n) {
      margin-right: 0;
    }
  }
`;
