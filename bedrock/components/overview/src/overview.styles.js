import styled from 'styled-components';

export const OverviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ fullScreen }) =>
    fullScreen &&
    `
      position: fixed;
      background-color: white;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 10000;
      height: 100vh;
  `};
`;

export const DemoStage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-image: linear-gradient(45deg, hsl(0, 0%, 90%) 25%, transparent 25%),
    linear-gradient(-45deg, hsl(0, 0%, 90%) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, hsl(0, 0%, 90%) 75%),
    linear-gradient(-45deg, transparent 75%, hsl(0, 0%, 90%) 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  width: 100%;
  @media (min-width: 900px) {
    width: ${({ size }) => {
      switch (size) {
        case 's':
          return '33%';
        case 'm':
          return '50%';
        case 'l':
          return '67%';
        default:
          return '100%';
      }
    }};
  }
`;

export const Resizable = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  resize: horizontal;
  overflow: hidden;
  padding: 10px;
  width: 100%;
  max-width: ${props => props.size || '100%'};
  background-color: rgba(77, 77, 77, 0.15);
  &:hover:after {
    position: absolute;
    content: 'Resize';
    bottom: 0;
    right: 5px;
    font-size: 14px;
    font-weight: 700;
  }
`;

export const DemoGrid = styled.div`
  display: block;
  position: relative;
  flex-grow: 1;
  @media (min-width: 900px) {
    display: ${props => (props.size === 'full' ? 'block' : 'flex')};
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const DemoGridControls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1.5rem;
  > * {
    margin-bottom: 0;
  }
  .button {
    min-height: 33px;
  }
`;

export const SchemaFormWrapper = styled.div`
  display: ${props => (props.showForm ? 'flex' : 'none')};
  justify-content: center;
  overflow-y: visible;
  border: dotted 1px #ccc;
  position: relative;
  padding: 0.5rem;
  width: 100%;
  @media (min-width: 900px) {
    width: ${({ size }) => {
      switch (size) {
        case 's':
          return '67%';
        case 'm':
          return '50%';
        case 'l':
          return '33%';
        default:
          return '100%';
      }
    }};
  }
`;

export const SchemaFormWrapperInner = styled.div`
  position: ${props => (props.size === 'full' ? 'static' : '')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: ${props => (props.size === 'full' ? '40vh' : '75vh')};
  max-width: 800px;
  fieldset > legend,
  fieldset > legend + p {
    display: none;
  }
  form > div > label {
    display: none;
  }
`;

export const CodeBlockWrapper = styled.div`
  margin: 2rem 0;
`;
