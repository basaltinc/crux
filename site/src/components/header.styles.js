import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

export const SiteNav = styled.header`
  background: ${props => props.theme.header.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  font-family: ${props => props.theme.header.fontFamily};
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    li {
      position: relative;
      margin: 0;
      &:not(:last-child) {
        padding-right: 35px;
      }
    }
  }
  & a:hover {
    text-decoration: underline;
  }
  a[aria-current='page'] {
    font-weight: bold;
    &:before {
      color: ${props => props.theme.header.accentColor};
      content: '>';
      position: absolute;
      left: -15px;
      font-weight: bold;
    }
  }
`;

export const MobileNav = styled.div`
  display: block;
  ul {
    background: ${props => props.theme.header.background};
    z-index: 103;
    display: block;
    text-align: right;
    position: absolute;
    right: 0;
    top: 50px;
    padding: 2rem 1rem 2rem 1rem;
    width: 100%;
  }
  && li {
    padding: 1rem 1rem 1rem 8rem;
    border-top: solid 1px rgba(255, 255, 255, 0.5);
    max-width: 400px;
    margin-left: auto;
  }
  a {
    position: relative;
  }
`;

export const SiteHeaderLink = styled(Link)`
  && {
    color: white;
    text-decoration: none;
  }
`;

export const SiteHeaderNavLink = styled(NavLink)`
  && {
    color: white;
    text-decoration: none;
  }
`;

export const Hamburger = styled(FaBars)`
  color: white;
  float: right;
  font-size: 1.5rem;
`;

export const X = styled(FaTimes)`
  color: white;
  float: right;
  font-size: 1.5rem;
`;
