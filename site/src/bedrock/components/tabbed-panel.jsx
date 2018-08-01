import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import copyIcon from '../../../../images/svgs/copy.svg';
import { getTypeColor } from '../../theme';

const ShadowWrap = styled.div`
  position: relative;
  &:after {
    z-index: -1;
    position: absolute;
    content: '';
    bottom: 15px;
    right: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: ${props => props.colorTheme};
    box-shadow: 0 15px 10px ${props => props.colorTheme};
    transform: rotate(3deg);
  }
`;

const HeaderRegion = styled.div`
  border: 1px solid ${props => props.colorTheme};
  border-right: 5px solid ${props => props.colorTheme};
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  display: flex;
  padding: 30px;
  line-height: 1;
  position: relative;
  code {
    color: ${props => props.colorTheme};
    background: ${props => props.colorThemeAccent};
  }
`;

const CopyThis = styled.div`
  position: absolute;
  cursor: pointer;
  right: 20px;
  img {
    width: 26px;
    margin-left: 10px;
  }
`;

const DemoStage = styled.div`
  background: #fff;
  border-width: 9px 5px 1px 1px;
  border-style: solid;
  border-color: ${props => props.colorTheme};
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
  padding: 30px;
`;

class TabbedPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: props.items[0].id,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    this.setState({
      activeId: item.id,
    });
  }

  render() {
    const colorTheme = `var(${getTypeColor(this.props.color)})`;
    const colorThemeAccent = `var(${getTypeColor(this.props.color, 'accent')})`;

    const tabs = this.props.items.map(item => (
      <div
        key={item.id}
        role="button"
        tabIndex={0}
        onClick={() => this.handleClick(item)}
        style={{
          background: '#FFF',
          outline: 'none',
          padding: '0',
          margin: '0',
          borderBottom:
            this.state.activeId === item.id
              ? `5px solid ${colorTheme}`
              : '5px solid transparent',
          color: this.state.activeId === item.id ? colorTheme : 'black',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        {item.title}
      </div>
    ));

    const content = this.props.items.map(item => (
      <div
        key={item.id}
        style={{
          display: this.state.activeId === item.id ? 'block' : 'none',
        }}
      >
        {item.header && (
          <HeaderRegion
            colorTheme={colorTheme}
            colorThemeAccent={colorThemeAccent}
          >
            {item.header}
            <CopyThis>
              <img src={copyIcon} alt="Copy" title="Copy!" />
            </CopyThis>
          </HeaderRegion>
        )}
        {item.children && (
          <DemoStage colorTheme={colorTheme}>{item.children}</DemoStage>
        )}
        {item.footer && <footer>{item.footer}</footer>}
      </div>
    ));
    return (
      <div {...this.props} {...this.state}>
        <div
          style={{
            margin: '0 0 -3px',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          {tabs}
        </div>
        <ShadowWrap colorTheme={colorTheme}>{content}</ShadowWrap>
      </div>
    );
  }
}

TabbedPanel.defaultProps = {
  color: 'none',
  type: 'none',
};

TabbedPanel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      header: PropTypes.node,
      children: PropTypes.node.isRequired,
      footer: PropTypes.node,
    }),
  ).isRequired,
  color: PropTypes.string,
};

export default TabbedPanel;
