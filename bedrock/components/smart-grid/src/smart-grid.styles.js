import styled from 'styled-components';
import { breakpoints } from '@basalt/bedrock-core';

const gutter = 16; // px

function calcWidth(size, breakpoint) {
  return `
    @media (min-width: ${breakpoints[breakpoint]}){
      width: calc(${100 / size}% + ${gutter / size}px - ${gutter}px);
    }
  `;
}

export const SmartGridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const SmartGridItem = styled.div`
  margin-bottom: ${gutter}px;
  width: 100%;
  display: flex; // children of this item will stretch in height to fill, so we get equal height items
  ${props =>
    // eslint-disable-next-line array-callback-return
    Object.keys(breakpoints).map(bp => {
      if (props[bp]) {
        return calcWidth(props[bp], bp);
      }
    })};
`;
