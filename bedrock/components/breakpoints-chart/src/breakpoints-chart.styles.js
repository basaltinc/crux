import styled from 'styled-components';

export const BreakpointListItem = styled.li`
  left: ${props => props.left};
  position: absolute;
  border-left: solid 3px hsl(0, 0%, 50%);
  opacity: 0.7;
  height: 100%;
  > .label {
    display: block;
    background: hsl(0, 0%, 50%);
    opacity: 0.7;
    padding: 3px;
    color: white;
  }
  &:hover {
    opacity: 1;
    border-left-color: hsl(0, 0%, 35%);
    z-index: 2;
    > .label {
      opacity: 1;
      background: hsl(0, 0%, 35%);
    }
  }
`;

export const DeviceListItem = styled.li`
  width: ${props => props.width}px;
  border-bottom: solid 3px hsl(0, 0%, 80%);
  text-align: right;
  margin-bottom: ${props => props.theme.spacing.m};
  padding-right: ${props => props.theme.spacing.m};
  border-right: solid 3px hsl(0, 0%, 80%);
`;

export const DeviceWidthUl = styled.ul`
  max-width: calc(75vw - 2 * ${props => props.theme.spacing.l});
  padding-top: 20px;
`;

export const BreakpointsWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow-y: hidden;
  li {
    list-style-type: none;
  }
`;
