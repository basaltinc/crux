import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTypeColor } from '../../../packages/core/src/context';
import {
  ShadowWrap,
  DemoStage,
  DemoTab,
  DemoTabsWrap,
  FooterRegion,
  HeaderRegion,
} from './tabbed-panel.styles';

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
