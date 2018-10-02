import styled from 'styled-components';

export const ShadowWrap = styled.div`
  position: relative;
  border-radius: ${props => props.theme.globals.borders.radius};
  border-width: 1px 5px 1px 1px;
  border-style: solid;
  border-color: ${props => props.colorTheme};
`;

export const HeaderRegion = styled.div`
  background: ${props => props.colorThemeAccent};
  border-bottom: 10px solid ${props => props.colorTheme};
  border-top-right-radius: ${props => props.theme.globals.borders.radius};
  border-top-left-radius: ${props => props.theme.globals.borders.radius};
  display: flex;
  padding: 30px;
  line-height: 1;
  position: relative;
  code {
    color: #fff;
    background: ${props => props.colorTheme};
  }
`;

export const DemoStage = styled.div`
  background: #fff;
  border-radius: ${props => props.theme.globals.borders.radius};
  padding: ${props => props.bleed};
`;

export const DemoTabsWrap = styled.div`
  margin: 0 0 -3px;
  display: flex;
  justify-content: space-evenly;
`;

export const DemoTab = styled.div`
  background: #fff;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
`;

export const FooterRegion = styled.div`
  border-top: 1px solid ${props => props.colorTheme};
  padding-top: 1.5rem;
  margin-bottom: -0.5rem;
  h5 {
    color: ${props => props.colorTheme};
    margin-bottom: 0.5rem;
  }
`;
