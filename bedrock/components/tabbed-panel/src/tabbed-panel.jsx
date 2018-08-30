import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getTypeColor } from '../../../packages/core/src/context';

const ShadowWrap = styled.div`
  position: relative;
  border-radius: ${props => props.theme.border.radius};
  border-width: 1px 5px 1px 1px;
  border-style: solid;
  border-color: ${props => props.colorTheme};
`;

const HeaderRegion = styled.div`
  background: ${props => props.colorThemeAccent};
  border-bottom: 10px solid ${props => props.colorTheme};
  border-top-right-radius: ${props => props.theme.border.radius};
  border-top-left-radius: ${props => props.theme.border.radius};
  display: flex;
  padding: 30px;
  line-height: 1;
  position: relative;
  code {
    color: #fff;
    background: ${props => props.colorTheme};
  }
`;

const DemoStage = styled.div`
  background: #fff;
  border-radius: ${props => props.theme.border.radius};
  padding: ${props => props.bleed};
`;

const DemoTabsWrap = styled.div`
  margin: 0 0 -3px;
  display: flex;
  justify-content: space-evenly;
`;

const DemoTab = styled.div`
  background: #fff;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
`;

const FooterRegion = styled.div`
  border-top: 1px solid ${props => props.colorTheme};
  padding-top: 1.5rem;
  margin-bottom: -0.5rem;
  h5 {
    color: ${props => props.colorTheme};
    margin-bottom: 0.5rem;
  }
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
    const colorTheme = getTypeColor(this.props.color);
    const colorThemeAccent = getTypeColor(this.props.color, 'accent');
    const tabs = this.props.items.map(item => {
      const isPropVariation = !!item.children.props.prop;
      return (
        <DemoTab
          key={item.id}
          role="button"
          tabIndex={0}
          onClick={() => this.handleClick(item)}
          onKeyUp={() => this.handleClick(item)}
          style={{
            borderBottom:
              this.state.activeId === item.id
                ? `5px solid ${colorTheme}`
                : '5px solid transparent',
            color: this.state.activeId === item.id ? colorTheme : 'black',
            zIndex: this.state.activeId === item.id ? 1 : 0,
            fontWeight: this.state.activeId === item.id ? 'bold' : 'normal',
          }}
        >
          {isPropVariation ? item.children.props.prop.title : item.title}
        </DemoTab>
      );
    });

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
          </HeaderRegion>
        )}
        {item.children && (
          <DemoStage colorTheme={colorTheme} bleed={this.props.bleed}>
            {item.children}
            {item.notes && (
              <FooterRegion colorTheme={colorTheme}>
                <h5>Notes</h5>
                {item.notes}
              </FooterRegion>
            )}
          </DemoStage>
        )}
      </div>
    ));
    return (
      <div>
        <DemoTabsWrap>{tabs}</DemoTabsWrap>
        <ShadowWrap colorTheme={colorTheme}>{content}</ShadowWrap>
      </div>
    );
  }
}

TabbedPanel.defaultProps = {
  color: 'none',
  // type: 'none',
  bleed: '30px',
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
  bleed: PropTypes.string,
  // type: PropTypes.string,
};

export default TabbedPanel;
