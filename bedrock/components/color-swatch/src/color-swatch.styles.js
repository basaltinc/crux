import styled from 'styled-components';

export const OuterSwatch = styled.div`
  width: 49%;
  margin-bottom: 10px;
  padding: 5px;
  border: solid 1px ${props => props.theme.colors.neutral};
`;

export const InnerSwatch = styled.div`
  height: 50px;
  background-color: ${props => (props.colorValue ? props.colorValue : 'auto')};
  border: dashed 1px ${props => props.theme.colors.neutral};
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
  float: right;
`;
