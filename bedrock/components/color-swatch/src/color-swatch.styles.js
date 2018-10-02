import styled from 'styled-components';

export const OuterSwatch = styled.div`
  width: 49%;
  margin-bottom: 10px;
  padding: 5px;
  border: solid 1px ${props => props.theme.globals.colors.neutral};
  > div {
    position: relative;
  }
  h5 {
    margin: 0 0 0.5rem;
  }
`;

export const InnerSwatch = styled.div`
  height: 50px;
  background-color: ${props => (props.colorValue ? props.colorValue : 'auto')};
  border: solid 1px ${props => props.theme.globals.colors.neutral};
`;

export const RightLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SwatchesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CopyToClipboardWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
