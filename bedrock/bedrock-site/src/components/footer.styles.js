import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  border-top: 1px solid #000000;
  background-color: ${props => props.theme.footer.background};
  color: white;
  && a {
    color: white;
  }
  ul,
  li {
    margin-bottom: 2px;
  }
`;

export const FooterMenu = styled.ul`
  display: flex;
  list-style: none;
`;

export const FooterMenuItem = styled.li`
  margin-right: 10px;
`;
