import styled from 'styled-components';

export const VariationsWrapper = styled.div`
  margin: 2rem 0;
  .form-group > div:first-child {
    display: none;
  }
`;

export const VariationItem = styled.div`
  padding: 0 15px;
  border-bottom: 1px solid ${props => props.colorTheme};
`;

export const VariationItemExpanded = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
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
    margin: 0;
  }
`;
