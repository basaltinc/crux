import styled from 'styled-components';
import {fontFamilies} from "../../../packages/core/src/context";

export const VariationsWrapper = styled.div`
  margin: 2rem 0;
  .form-group > div:first-child {
    display: none;
  }
`;

export const VariationItem = styled.div`
  padding: ${props => props.theme.spacing.s} ${props => props.theme.spacing.m};
  border-bottom: 1px solid ${props => props.colorTheme};
  .form-group.field {
    margin-top: 0;
  }
`;

export const VariationItemExpanded = styled.div`
  border-bottom: 1px solid ${props => props.colorTheme};
  &:last-of-type {
    border-bottom: 0;
  }
  h4 {
    border-bottom: 1px solid ${props => props.colorTheme};
    color: ${props => props.colorTheme};
    padding: ${props => props.theme.spacing.m};
    margin: 0;
  }
`;

export const HeaderRegion = styled.div`
  background: ${props => props.colorThemeAccent};
  border-bottom: 10px solid ${props => props.colorTheme};
  border-top-right-radius: ${props => props.theme.border.radius};
  border-top-left-radius: ${props => props.theme.border.radius};
  padding: 30px;
  line-height: 1;
  position: relative;
  h5 {
    color: ${props => props.colorTheme};
  }
`;

export const HeaderInner = styled.div`
  font-family: ${props => props.theme.fonts.families.avenir.medium};
  cursor: pointer;
  position: absolute;
  color: ${props => props.colorTheme};
  font-weight: bold;
  display: inline-block;
  right: 15px;
  bottom: 15px;
`;

export const FooterRegion = styled.div`
  border-top: 1px solid ${props => props.colorTheme};
  padding: 18px 15px 15px;
  summary {
    color: ${props => props.colorTheme};
    outline: none;
    user-select: none;
    font-weight: bold;
  }
  details[open] summary {
    color: #000;
  }
  pre {
    color: ${props => props.colorTheme};
    margin: 0;
  }
`;
