import styled from 'styled-components';

export const DemoBlock = styled.div`
  margin: ${props => props.theme.spacing.xl} 0;

  blockquote[contenteditable] {
    border-top: 1px dashed transparent;
    border-right: 1px dashed transparent;
    border-bottom: 1px dashed transparent;
    transition: ${props => props.theme.transition.all};
  }
  blockquote[contenteditable]:hover {
    border-top: 1px dashed ${props => props.theme.colors.neutral_light};
    border-right: 1px dashed ${props => props.theme.colors.neutral_light};
    border-bottom: 1px dashed ${props => props.theme.colors.neutral_light};
  }
  [contenteditable]:not(blockquote) {
    border: 1px dashed transparent;
    transition: ${props => props.theme.transition.all};
  }
  [contenteditable]:not(blockquote):hover {
    border: 1px dashed ${props => props.theme.colors.neutral_light};
  }
`;
