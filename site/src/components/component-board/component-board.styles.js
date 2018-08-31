import styled from 'styled-components';

export const PatternGrid = styled.ul`
  display: flex;
  align-items: stretch;
  margin: 50px;
  padding: 0;
  list-style-type: none;
`;

export const PatternGridItem = styled.li`
  background: #fff;
  position: relative;
  transition: all 0.3s ease-in-out;
  ${PatternGrid}:hover & {
    filter: blur(0.75px);
  }
  &:hover {
    filter: blur(0px) !important;
    z-index: 100;
  }
  > a:link,
  > a:visited {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'AvenirMedium', sans-serif;
    text-decoration: none;
    padding: 30px 30px 0;
    height: 100%;
    border: solid 1px #ccc;
    border-radius: var(--border-radius);
    text-align: center;
    transition: all 0.2s ease-in-out;
    position: relative;
    z-index: 100;
  }
  > a:hover {
    position: absolute;
    background: #fff;
    border-radius: var(--border-radius);
    border-color: var(--type-color--component);
    transform: scale(1.05);
    width: 100%;
    height: auto;
    z-index: 200;
  }
`;

export const PatternGridItemThumb = styled.img`
  display: block;
  max-width: 250px;
  width: 100%;
  max-height: 110px;
  margin: 0 auto 15px;
  filter: grayscale(75%);
  transition: all 0.2s ease-in-out;
  ${PatternGridItem}:hover & {
    filter: grayscale(0%);
  }
`;

export const PatternGridItemTitle = styled.span`
  color: #000;
  margin-bottom: -3px;
  border-bottom: 5px solid var(--type-color--component);
  display: inline-block;
  transition: all 0.2s ease-in-out;
`;

export const PatternGridItemDescription = styled.div`
  font-family: 'AvenirLight', sans-serif;
  line-height: 1.25;
  font-size: 14px;
  color: #000;
  font-style: italic;
  padding: 25px 0 25px;
  max-width: 250px;
  margin: 0 auto;
  opacity: 0;
  height: 0;
  pointer-events: none;
  transition: all 0.1s ease-in-out;
  transform: scale(0.75);
  position: absolute;

  ${PatternGridItem} > a:hover & {
    opacity: 1;
    transform: scale(1);
    height: auto;
    position: relative;
  }
`;
