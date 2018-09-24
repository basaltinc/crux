import styled from 'styled-components';

export const NavListStyled = styled.nav`
  li {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    position: relative;
  }
  li:not(:first-child) h4 {
    margin-top: 1.5rem;
  }
  h4 {
    margin-bottom: 0.25rem;
    text-decoration: none;
    a {
      margin-left: 0;
    }
    a[aria-current='page'] {
      font-weight: bold;
      &:before {
        color: ${props => props.theme.sidebar.accentColor};
        content: '>';
        position: absolute;
        left: -20px;
      }
    }
  }
  a {
    text-decoration: none;
    margin-left: 20px;
    &:hover {
      text-decoration: underline;
    }
    &[aria-current='page'] {
      font-weight: bold;
      &:before {
        color: ${props => props.theme.sidebar.accentColor};
        content: '>';
        position: absolute;
        left: 0;
      }
    }
  }
`;
